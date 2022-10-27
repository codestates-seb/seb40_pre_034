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



//    회원 ID
//    @ManyToOne 답변 : 회원 = N : 1
//    @JoinColumn(name = "MEMBER_ID")
//    private Long member_id;

//    게시글 ID
//    @ManyToOne 답변 : 질문 = N : 1
//    @JoinColumn(name = "QUESTION_ID")
//    private Long question_id;


//    답변 ID
//    @ManyToOne 답변 : 게시글 = N : 1
//    @JoinColumn(name = "ANSWER_ID")
//    private Long answer_id;

}
