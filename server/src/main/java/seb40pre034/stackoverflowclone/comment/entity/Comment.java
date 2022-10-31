package seb40pre034.stackoverflowclone.comment.entity;


import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb40pre034.stackoverflowclone.audit.Auditable;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Enabled
@Table(name = "COMMENT")
public class Comment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(columnDefinition = "TEXT",nullable = false)
    private String Comment_content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;
}
