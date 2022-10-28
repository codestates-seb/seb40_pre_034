package seb40pre034.stackoverflowclone.answer.mapper;

import java.time.LocalDateTime;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40pre034.stackoverflowclone.answer.dto.AnswerDto;
import seb40pre034.stackoverflowclone.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-28T01:56:17+0900",
    comments = "version: 1.5.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 17.0.4.1 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswer_content( requestBody.getAnswer_content() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( requestBody.getAnswerId() );
        answer.setAnswer_content( requestBody.getAnswer_content() );

        return answer;
    }

    @Override
    public AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        long answerId = 0L;
        String answer_content = null;

        if ( answer.getAnswerId() != null ) {
            answerId = answer.getAnswerId();
        }
        answer_content = answer.getAnswer_content();

        List<String> imgUrls = null;
        LocalDateTime date = null;
        Integer vote = null;

        AnswerDto.Response response = new AnswerDto.Response( answerId, answer_content, imgUrls, date, vote );

        return response;
    }
}
