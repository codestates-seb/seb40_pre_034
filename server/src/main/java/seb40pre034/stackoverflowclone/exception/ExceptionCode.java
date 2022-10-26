package seb40pre034.stackoverflowclone.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_FOUND(404, "Answer not found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists");


    @Getter
    private int code;
    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
