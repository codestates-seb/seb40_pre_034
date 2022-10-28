package seb40pre034.stackoverflowclone.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "닉네임을 입력해 주세요.")
        private String nickName;

        @NotBlank(message = "패스워드를 입력해 주세요.")
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private Long memberId;

        private String email;

        private String nickName;

        private String password;

        private Member.MemberStatus memberStatus;

        public void setMemberId(Long memberId) {
            this.memberId = memberId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private Long memberId;
        private String email;
        private String nickName;
        private String password;
        private Member.MemberStatus memberStatus;

        public String getMemberStatus() {
            return memberStatus.getStatus();
        }
    }
}
