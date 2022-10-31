package seb40pre034.stackoverflowclone.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.w3c.dom.Text;
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
    private Member memberId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question questionId;

}
