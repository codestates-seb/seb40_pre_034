package seb40pre034.stackoverflowclone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import seb40pre034.stackoverflowclone.audit.Auditable;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Table(name = "QUESTION")
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 25, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @ColumnDefault("0")
    private Integer vote;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member memberId;
}
