package seb40pre034.stackoverflowclone.answer.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40pre034.stackoverflowclone.answer.dto.AnswerDto;
import seb40pre034.stackoverflowclone.answer.entity.Answer;
import seb40pre034.stackoverflowclone.answer.mapper.AnswerMapper;
import seb40pre034.stackoverflowclone.answer.service.AnswerService;
import seb40pre034.stackoverflowclone.dto.MultiResponseDto;
import seb40pre034.stackoverflowclone.dto.SingleResponseDto;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.member.service.MemberService;
import seb40pre034.stackoverflowclone.question.entity.Question;
import seb40pre034.stackoverflowclone.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
@AllArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final MemberService memberService;
    private final QuestionService questionService;
    private final AnswerMapper mapper;

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody) {
        Member foundMember = memberService.findMember(requestBody.getMemberId());
        Question foundQuestion = questionService.findQuestion(requestBody.getQuestionId());

        Answer answer = mapper.answerPostDtoToAnswer(requestBody);
        answer.setMember(foundMember);
        answer.setQuestion(foundQuestion);

        Answer createdAnswer = answerService.createAnswer(answer);
        AnswerDto.Response response = mapper.answerToAnswerResponse(createdAnswer);
        response.setNickName(foundMember.getNickName());

        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED
        );
    }

    @PatchMapping("/edit/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody) {
        requestBody.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer)),
                HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getAnswers(@PathVariable("question-id") @Positive long questionId) {
        List<Answer> answers = answerService.findAnswers(questionId);

        List<AnswerDto.Response> responses = mapper.answersToAnswerResponseDtos(answers);

        for (AnswerDto.Response response : responses) {
            for (Answer answer : answers) {
                if (response.getAnswerId() == answer.getAnswerId()) {
                    response.setNickName(answer.getMember().getNickName());
                    break;
                }
            }
        }

        return new ResponseEntity(new MultiResponseDto<>(responses),
                HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

