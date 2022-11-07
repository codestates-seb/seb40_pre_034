package seb40pre034.stackoverflowclone.memberTest;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.member.repository.MemberRepository;
import seb40pre034.stackoverflowclone.member.service.MemberService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class MemberServiceMockTest {

    @Mock
    private MemberRepository memberRepository;

    @InjectMocks
    private MemberService memberService;

    @Test
    public void createdTest() {
        Member member = new Member("kcjckswnd@naver.com", "ckswnd", "123123");
        given(memberRepository.findByEmail(member.getEmail()))
                .willReturn(Optional.of(member));

        assertThrows(BusinessLogicException.class, () -> memberService.createdMember(member));
    }

}
