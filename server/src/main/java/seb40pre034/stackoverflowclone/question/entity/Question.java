package seb40pre034.stackoverflowclone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import seb40pre034.stackoverflowclone.audit.Auditable;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Table(name = "QUESTION")
@Entity
@DynamicInsert
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 25, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private Integer vote;

    @Column(nullable = false)
    private Integer views;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;

    @OneToMany(mappedBy = "question")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void setMemberId(Member memberId) {
        this.memberId = memberId;
    }

    public void setQuestionTags(List<QuestionTag> questionTags) {
        this.questionTags = questionTags;
    }

    public void setQuestionTags(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
    }
}
