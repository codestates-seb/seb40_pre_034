package seb40pre034.stackoverflowclone.question.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40pre034.stackoverflowclone.dto.MultiResponseDto;
import seb40pre034.stackoverflowclone.dto.SingleResponseDto;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.member.service.MemberService;
import seb40pre034.stackoverflowclone.question.dto.QuestionDto;
import seb40pre034.stackoverflowclone.question.entity.Question;
import seb40pre034.stackoverflowclone.question.entity.QuestionTag;
import seb40pre034.stackoverflowclone.question.mapper.QuestionMapper;
import seb40pre034.stackoverflowclone.question.service.QuestionService;
import seb40pre034.stackoverflowclone.tag.entity.Tag;
import seb40pre034.stackoverflowclone.tag.mapper.TagMapper;
import seb40pre034.stackoverflowclone.tag.service.TagService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
@Validated
@AllArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final MemberService memberService;
    private final TagService tagService;
    private final QuestionMapper questionMapper;
    private final TagMapper tagMapper;

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody) {
        Member foundMember = memberService.findMember(requestBody.getMemberId());
        Question question = questionMapper.questionPostDtoToQuestion(requestBody);
        question.setMember(foundMember);
        Question createdQuestion = questionService.createQuestion(question);

        List<String> tags = new ArrayList<>();
        if(Optional.ofNullable(requestBody.getTags()).isPresent()) {
            List<Tag> createdTags = tagService.createTag(requestBody.getTags(), createdQuestion.getQuestionId());
            tags.addAll(tagMapper.tagsListToStringList(createdTags));
        }

        QuestionDto.Response response = questionMapper.questionToQuestionResponse(createdQuestion);
        response.setTags(tags);
        response.setNickName(foundMember.getNickName());

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question-id") @Positive long questionId,
            @Valid @RequestBody QuestionDto.Patch requestBody) {
        requestBody.setQuestionId(questionId);
        Question question = questionMapper.questionPatchDtoToQuestion(requestBody);
        Question updatedQuestion = questionService.updateQuestion(question);

        if(Optional.ofNullable(requestBody.getTags()).isPresent()) {
            tagService.createTag(requestBody.getTags(), questionId);
        }

        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToQuestionResponse(updatedQuestion)),
                HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        List<Tag> tags = new ArrayList<>();
        Question question = questionService.findQuestion(questionId);
        List<QuestionTag> questionTags = question.getQuestionTags();
        for (QuestionTag qt : questionTags) {
            tags.add(qt.getTag());
        }

        questionService.increaseViews(questionId);
        QuestionDto.Response response = questionMapper.questionToQuestionResponse(question);
        response.setTags(tagMapper.tagsListToStringList(tags));
        response.setNickName(question.getMember().getNickName());
        return new ResponseEntity(new SingleResponseDto<>(response),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();
        List<QuestionDto.Response> responses = questionMapper.questionsToQuestionResponses(questions);

        for (Question q : questions) {
            List<Tag> tags = new ArrayList<>();
            List<QuestionTag> questionTags = q.getQuestionTags();
            for (QuestionTag qt : questionTags) {
                tags.add(qt.getTag());
            }

            for (QuestionDto.Response response : responses) {
                if (response.getQuestionId() == q.getQuestionId()) {
                    response.setTags(tagMapper.tagsListToStringList(tags));
                    response.setNickName(q.getMember().getNickName());
                    break;
                }
            }
        }

        return new ResponseEntity(new MultiResponseDto<>(responses),
                HttpStatus.OK);
    }

    @DeleteMapping("/delete/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
