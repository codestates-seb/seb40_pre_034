package seb40pre034.stackoverflowclone.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import seb40pre034.stackoverflowclone.question.dto.QuestionDto;
import seb40pre034.stackoverflowclone.question.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post requestBody);

    Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody);

    QuestionDto.Response questionToQuestionResponse(Question question);

    List<QuestionDto.Response> questionsToQuestionResponses(List<Question> questions);
}
