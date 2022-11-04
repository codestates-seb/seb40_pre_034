package seb40pre034.stackoverflowclone.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "회원을 조회할 수 없습니다."),
    MEMBER_EXISTS(409, "동일한 이메일이 존재합니다."),
    QUESTION_NOT_FOUND(404, "게시글을 찾을 수 없습니다."),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    COMMENT_NOT_FOUND(404,"Comment not found");
    TAG_NOT_FOUND(404, "해당 태그를 찾을 수 없습니다.");
    ;

    @Getter
    private int code;
    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
