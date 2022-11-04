package seb40pre034.stackoverflowclone.member.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40pre034.stackoverflowclone.member.dto.MemberDto;
import seb40pre034.stackoverflowclone.member.entity.Member;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-03T23:27:50+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 15.0.1 (Oracle Corporation)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(MemberDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( requestBody.getEmail() );
        member.setNickName( requestBody.getNickName() );
        member.setPassword( requestBody.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchToMember(MemberDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( requestBody.getMemberId() );
        member.setEmail( requestBody.getEmail() );
        member.setNickName( requestBody.getNickName() );
        member.setPassword( requestBody.getPassword() );
        member.setMemberStatus( requestBody.getMemberStatus() );

        return member;
    }

    @Override
    public MemberDto.Response memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        Long memberId = null;
        String email = null;
        String nickName = null;
        String password = null;
        Member.MemberStatus memberStatus = null;

        memberId = member.getMemberId();
        email = member.getEmail();
        nickName = member.getNickName();
        password = member.getPassword();
        memberStatus = member.getMemberStatus();

        MemberDto.Response response = new MemberDto.Response( memberId, email, nickName, password, memberStatus );

        return response;
    }

    @Override
    public List<MemberDto.Response> membersToMemberResponse(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberDto.Response> list = new ArrayList<MemberDto.Response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponse( member ) );
        }

        return list;
    }
}
