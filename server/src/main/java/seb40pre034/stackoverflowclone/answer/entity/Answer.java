package seb40pre034.stackoverflowclone.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.w3c.dom.Text;
import seb40pre034.stackoverflowclone.audit.Auditable;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ANSWER")

public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String answer_content;

    @Column(nullable = false)
    private int Answer_vote = 0;



//  회원 ID
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Long member_id;

//  게시글 ID
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Long question_id;

}
