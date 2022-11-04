package seb40pre034.stackoverflowclone.answer.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.w3c.dom.stylesheets.LinkStyle;
import seb40pre034.stackoverflowclone.answer.entity.Answer;
import seb40pre034.stackoverflowclone.answer.repository.AnswerRepository;

import java.util.List;
import java.util.Optional;

@DataJpaTest
public class AnswerRepositoryTests {

    @Autowired
    private AnswerRepository answerRepository;


    @Test
    @Order(1)
    public void saveAnswerTest() {
        Answer answer = Answer.builder()
                .answer_content("답변내용")
                .build();

        answerRepository.save(answer);

        Assertions.assertThat(answer.getAnswerId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void getAnswerTest() {
        Optional<Answer> answer = answerRepository.findById(1l);

        answer.ifPresent(selectedAnswer -> {
            System.out.println(selectedAnswer);
        });

    }


    @Test
    @Order(3)
    public void updateAnswerTest() {

        Optional<Answer> answer = answerRepository.findById(1l);

        answer.ifPresent(selectedAnswer -> {
            selectedAnswer.setAnswer_content("답변수정");
        });

        System.out.println(answer);

    }

    @Test
    @Order(4)
    public void deleteAnswerTest() {
        Optional<Answer> answer = answerRepository.findById(1l);

        answer.ifPresent(selectedAnswer  -> {
            answerRepository.delete(selectedAnswer);
        });

    }
}
