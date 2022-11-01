package seb40pre034.stackoverflowclone.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import seb40pre034.stackoverflowclone.audit.Auditable;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.question.entity.Question;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ANSWER")

public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String answer_content;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int Answer_vote;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
    }

    public enum AnswerStatus {
        ANSWER_NOT_EXIST("존재하지 않는 답변"),
        ANSWER_EXIST("존재하는 답변");

        @Getter
        private String status;
        AnswerStatus(String status) {
            this.status = status;
        }
    }

}
