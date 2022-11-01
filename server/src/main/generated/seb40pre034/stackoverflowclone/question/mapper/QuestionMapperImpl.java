package seb40pre034.stackoverflowclone.question.mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40pre034.stackoverflowclone.question.dto.QuestionDto;
import seb40pre034.stackoverflowclone.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-01T10:01:58+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( requestBody.getTitle() );
        question.setContent( requestBody.getContent() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( requestBody.getQuestionId() );
        question.setTitle( requestBody.getTitle() );
        question.setContent( requestBody.getContent() );

        return question;
    }

    @Override
    public QuestionDto.Response questionToQuestionResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        long questionId = 0L;
        String title = null;
        String content = null;
        Integer vote = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        if ( question.getQuestionId() != null ) {
            questionId = question.getQuestionId();
        }
        title = question.getTitle();
        content = question.getContent();
        vote = question.getVote();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();

        QuestionDto.Response response = new QuestionDto.Response( questionId, title, content, vote, createdAt, modifiedAt );

        return response;
    }

    @Override
    public List<QuestionDto.ListResponse> questionsToQuestionResponses(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.ListResponse> list = new ArrayList<QuestionDto.ListResponse>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToListResponse( question ) );
        }

        return list;
    }

    protected QuestionDto.ListResponse questionToListResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        long questionId = 0L;
        String title = null;
        String content = null;
        Integer vote = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        if ( question.getQuestionId() != null ) {
            questionId = question.getQuestionId();
        }
        title = question.getTitle();
        content = question.getContent();
        vote = question.getVote();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();

        String nickname = null;
        String tag = null;
        Integer views = null;
        Integer answerSum = null;

        QuestionDto.ListResponse listResponse = new QuestionDto.ListResponse( questionId, title, content, vote, createdAt, modifiedAt, nickname, tag, views, answerSum );

        return listResponse;
    }
}
