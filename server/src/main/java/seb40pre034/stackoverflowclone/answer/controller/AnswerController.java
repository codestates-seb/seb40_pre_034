package seb40pre034.stackoverflowclone.answer.controller;


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

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.mapper = answerMapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody) {
        Answer answer = mapper.answerPostDtoToAnswer(requestBody);

        Answer createdAnswer = answerService.createAnswer(answer);
        AnswerDto.Response response = mapper.answerToAnswerResponse(createdAnswer);

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
        return new ResponseEntity(new MultiResponseDto<>(mapper.answersToAnswerResponseDtos(answers)),
                HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

