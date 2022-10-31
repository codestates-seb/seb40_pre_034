package seb40pre034.stackoverflowclone.login.testData;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.member.repository.MemberRepository;
import seb40pre034.stackoverflowclone.member.service.MemberService;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class init {
    private final MemberRepository repository;
    @PostConstruct
    public void memberInit() {
        Member member = new Member("test@test.com", "test", "test1234!@#$");
        member.setMemberId(1L);
        member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);

        repository.save(member);
    }
}
