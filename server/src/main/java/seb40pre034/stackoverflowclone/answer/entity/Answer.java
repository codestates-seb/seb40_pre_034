package seb40pre034.stackoverflowclone.answer.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import seb40pre034.stackoverflowclone.audit.Auditable;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.question.entity.Question;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
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

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void setMember(Member member) {
        this.member = member;
    }
    public void setQuestion(Question question) {
        this.question = question;
    }

}

