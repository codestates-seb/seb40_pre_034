import styled from "styled-components";

const UserInfoContainer = styled.div`
  display: flex;
  padding: 5px 6px 7px 7px;
  color: hsl(210, 8%, 45%);
`;

const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
`;

const Anchor = styled.a`
  font-size: ${(props) => (props.mainName ? "1.15384615rem" : "12px")};
  text-decoration-line: none;
  color: hsl(206, 100%, 40%);
  cursor: pointer;
  &:hover,
  :active {
    color: hsl(206, 100%, 52%);
    text-decoration: none;
  }
`;

const UserAvatarImgContainer = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
`;

const UserAvatarImg = styled.img`
  width: 48px;
  height: 48px;
`;

const UserInfo = styled.div`
  margin-left: 9px;
  width: 100%;
  line-height: 1.3;
`;

const UserDetail = styled.div`
  font-size: 12px;
  margin-bottom: 2px;
`;

const UserLocation = styled.div`
  font-size: 12px;
`;

const Flair = styled.div`
  line-height: 1;
  margin-bottom: 4px;
`;

const ReputationScore = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin-right: 2px;
`;

const UserTags = styled.div`
  //혹시 필요하질지도 몰라서 만들어 뒀습니다. 필요하면 사용하시고, 아니면 삭제해주세요!
`;
const User = ({ nickName, location, score }) => {
  //임시 더미 데이터입니다. 나중에 변경해주세요.
  const tagged = [
    {
      id: 1,
      stack: "python",
    },
    {
      id: 2,
      stack: "pandas",
    },
    {
      id: 3,
      stack: "dataframe",
    },
  ];
  return (
    <>
      <UserInfoContainer>
        <UserAvatar>
          <Anchor href="https://stackoverflow.com/users/userId/nickname">
            <UserAvatarImgContainer>
              <UserAvatarImg
                alt="avatar"
                src="https://cdn.pixabay.com/photo/2021/03/14/11/15/footprints-6093999_960_720.jpg"
              />
            </UserAvatarImgContainer>
          </Anchor>
        </UserAvatar>
        <UserInfo>
          <UserDetail>
            <Anchor mainName href="https://stackoverflow.com/users/userId/nickname">
              {nickName}
            </Anchor>
            <UserLocation>{location}</UserLocation>
            <Flair>
              <ReputationScore>{score}</ReputationScore>
            </Flair>
          </UserDetail>
          <UserTags>
            {tagged.map((el) => (
              <Anchor key={el.id} href="/questions/tagged/{el.stack}">
                {" " + el.stack + " "}
              </Anchor>
            ))}
          </UserTags>
        </UserInfo>
      </UserInfoContainer>
    </>
  );
};

export default User;
