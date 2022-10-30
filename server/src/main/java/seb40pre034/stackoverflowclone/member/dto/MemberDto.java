package seb40pre034.stackoverflowclone.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "닉네임을 입력해 주세요.")
        @Pattern(regexp = "\\w{4,12}", message = "영문자, 숫자가 각 각 1개 이상 포함 되어야 합니다.")
        private String nickName;

        @NotBlank(message = "패스워드를 입력해 주세요(최소 8자 최대 12자)")
        @Pattern(regexp = "[(a-zA-Z0-9)`~!@#\\$%\\^&*\\(\\)-_=\\+]{8,12}", message = "영문자와 숫자, !@#$%^&*()_+-=만 사용 가능합니다 ")
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
