package seb40pre034.stackoverflowclone.question.service;

import seb40pre034.stackoverflowclone.question.entity.Question;

import java.util.List;

public interface QuestionService {
    //CRUD
    public Question createQuestion(Question question);

    public Question updateQuestion(Question question);

    public Question findQuestion(long questionId);

    public List<Question> findQuestions();

    public void deleteQuestion(long questionId);

    public Question findVerifiedQuestion(long questionId);

    public void increaseViews(long questionId);
}
