package seb40pre034.stackoverflowclone.answer.service;

import org.springframework.stereotype.Service;
import seb40pre034.stackoverflowclone.answer.entity.Answer;
import seb40pre034.stackoverflowclone.answer.repository.AnswerRepository;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.exception.ExceptionCode;


import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    //유저 답변 저장
    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    //조회 기능
    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    // 업데이트 기능
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswer_content())
                .ifPresent(findAnswer::setAnswer_content);

        return answerRepository.save(findAnswer);

    }

    //삭제 기능
    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    //중복
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}

//     Member findAnswerMember(long memberId) {
//        Answer findAnswer = findVerifiedAnswer(answerId)
//        return findAnswer.getMember();
