package seb40pre034.stackoverflowclone.answer.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import seb40pre034.stackoverflowclone.answer.dto.AnswerDto;
import seb40pre034.stackoverflowclone.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post requestBody);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody);
    AnswerDto.Response answerToAnswerResponse(Answer answer);

    List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers);
}
