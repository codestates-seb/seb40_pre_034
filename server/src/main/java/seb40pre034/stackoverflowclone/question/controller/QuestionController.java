package seb40pre034.stackoverflowclone.question.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40pre034.stackoverflowclone.dto.MultiResponseDto;
import seb40pre034.stackoverflowclone.dto.SingleResponseDto;
import seb40pre034.stackoverflowclone.question.dto.QuestionDto;
import seb40pre034.stackoverflowclone.question.entity.Question;
import seb40pre034.stackoverflowclone.question.mapper.QuestionMapper;
import seb40pre034.stackoverflowclone.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@AllArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody) {
        Question question = mapper.questionPostDtoToQuestion(requestBody);
        Question createdQuestion = questionService.createQuestion(question);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponse(createdQuestion)), HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question-id") @Positive long questionId,
            @Valid @RequestBody QuestionDto.Patch requestBody) {
        requestBody.setQuestionId(questionId);
        Question question = mapper.questionPatchDtoToQuestion(requestBody);
        Question updatedQuestion = questionService.updateQuestion(question);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponse(updatedQuestion)),
                HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponse(question)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();
        return new ResponseEntity(new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions)),
                HttpStatus.OK);
    }

    @DeleteMapping("/delete/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
