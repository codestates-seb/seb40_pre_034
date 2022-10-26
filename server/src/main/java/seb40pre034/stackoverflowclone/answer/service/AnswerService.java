package seb40pre034.stackoverflowclone.answer.service;

import org.springframework.stereotype.Service;
import seb40pre034.stackoverflowclone.answer.entity.Answer;
import seb40pre034.stackoverflowclone.answer.repository.AnswerRepository;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.exception.ExceptionCode;


import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    //유저 답변 저장
    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    // 유저 답변을 찾은 뒤 없으면 에러 발생
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    // 업데이트 기능
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswer_content())
                .ifPresent(answerBody -> findAnswer.setAnswer_content(answerBody));

        Answer updatedQuestion = answerRepository.save(findAnswer);

        return updatedQuestion;

    }

    //vote 기능
    public Answer voteAnswer(long answerId, int Answer_vote) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswer_vote(Answer_vote);
        Answer updateAnswer = answerRepository.save(findAnswer);
        return updateAnswer;



//     Member findAnswerMember(long memberId) {
//        Answer findAnswer = findVerifiedAnswer(answerId)
//        return findAnswer.getMember();
    }

}
