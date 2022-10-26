package seb40pre034.stackoverflowclone.member.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb40pre034.stackoverflowclone.audit.Auditable;
import seb40pre034.stackoverflowclone.question.entity.Question;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "MEMBER")
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(length = 10, nullable = false)
    private String nickName;

    @Column(length = 12, nullable = false)
    private String password;

    public Member(String email, String nickName, String password) {
        this.email = email;
        this.nickName = nickName;
        this.password = password;
    }

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    @OneToMany
    @JoinColumn(name = "question_id")
    private List<Question> questions;

    public enum MemberStatus{
        MEMBER_ACTIVE("활동중"),
        MEMBER_QUIT("회원 탈퇴");

        @Getter
        private String status;

        MemberStatus(String status){
            this.status = status;
        }
    }

    /*
    @OneToMany
    @JoinColumn(name = "answer_id")
    private List<Answer> answers;

    @OneToMany
    @JoinColumn(name = "comment_id")
    private List<Comment> comments;
    */
}
