package seb40pre034.stackoverflowclone.answer.mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40pre034.stackoverflowclone.answer.dto.AnswerDto;
import seb40pre034.stackoverflowclone.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-07T15:08:12+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 15.0.1 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer.AnswerBuilder answer = Answer.builder();

        answer.answer_content( requestBody.getAnswer_content() );

        return answer.build();
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer.AnswerBuilder answer = Answer.builder();

        answer.answerId( requestBody.getAnswerId() );
        answer.answer_content( requestBody.getAnswer_content() );

        return answer.build();
    }

    @Override
    public AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        long answerId = 0L;
        String answer_content = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;
        Integer answer_vote = null;

        if ( answer.getAnswerId() != null ) {
            answerId = answer.getAnswerId();
        }
        answer_content = answer.getAnswer_content();
        createdAt = answer.getCreatedAt();
        modifiedAt = answer.getModifiedAt();
        answer_vote = answer.getAnswer_vote();

        String nickName = null;
        List<String> imgUrls = null;

        AnswerDto.Response response = new AnswerDto.Response( answerId, nickName, answer_content, imgUrls, createdAt, modifiedAt, answer_vote );

        return response;
    }

    @Override
    public List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerDto.Response> list = new ArrayList<AnswerDto.Response>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponse( answer ) );
        }

        return list;
    }
}
