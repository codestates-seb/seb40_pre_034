package seb40pre034.stackoverflowclone.member.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40pre034.stackoverflowclone.dto.MultiResponseDto;
import seb40pre034.stackoverflowclone.dto.SingleResponseDto;
import seb40pre034.stackoverflowclone.member.dto.MemberDto;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.member.mapper.MemberMapper;
import seb40pre034.stackoverflowclone.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        Member createdMember = memberService.createdMember(member);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(createdMember)), HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive Long memberId,
                                      @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setMemberId(memberId);
        Member member = mapper.memberPatchToMember(requestBody);
        Member updatedMember = memberService.updatedMember(member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        mapper.memberToMemberResponse(updatedMember)), HttpStatus.CREATED);
    }

    @GetMapping("/get/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive Long memberId) {
        Member findMember = memberService.findMember(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        mapper.memberToMemberResponse(findMember)), HttpStatus.OK);
    }

    @GetMapping("/gets")
    public ResponseEntity getMembers() {
        List<Member> findMembers = memberService.findMembers();
        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        mapper.membersToMemberResponse(findMembers)), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId) {
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
