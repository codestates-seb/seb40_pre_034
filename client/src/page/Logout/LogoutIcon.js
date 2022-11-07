import styled from "styled-components";

const IconContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid hsl(210, 8%, 85%);
`;

const IconList = styled.li`
  margin: 4px;
`;

const Anchor = styled.a`
  color: hsl(206, 100%, 40%);
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  margin: 4px;
`;

const UbuntuIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -360px;
`;

const MathIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -4032px;
`;

const ServerIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -5652px;
`;

const StackIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -6084px;
`;

const Stack2Icon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -6102px;
`;

const Stack3Icon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -6138px;
`;

const SuperIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
  background-position: 0 -6282px;
`;
const Link = styled.div`
  margin: 4px;
`;
const LogoutIcon = () => {
  return (
    <IconContainer>
      <IconList>
        <Anchor href="https://askubuntu.com">
          <Icons>
            <UbuntuIcon />
          </Icons>
          <Link>askubuntu.com</Link>
        </Anchor>
      </IconList>
      <IconList>
        <Anchor href="https://mathoverflow.net">
          <Icons>
            <MathIcon />
          </Icons>
          <Link>mathoverflow.net</Link>
        </Anchor>
      </IconList>
      <IconList>
        <Anchor href="https://serverfault.com">
          <Icons>
            <ServerIcon />
          </Icons>
          <Link>serverfault.com</Link>
        </Anchor>
      </IconList>
      <IconList>
        <Anchor href="https://stackapps.com">
          <Icons>
            <StackIcon />
          </Icons>
          <Link>stackapps.com</Link>
        </Anchor>
      </IconList>
      <IconList>
        <Anchor href="https://stackexchange.com">
          <Icons>
            <Stack2Icon />
          </Icons>
          <Link>stackexchange.com</Link>
        </Anchor>
      </IconList>
      <IconList>
        <Anchor href="https://stackoverflow.com">
          <Icons>
            <Stack3Icon />
          </Icons>
          <Link>stackoverflow.com</Link>
        </Anchor>
      </IconList>
      <IconList>
        <Anchor href="https://superuser.com">
          <Icons>
            <SuperIcon />
          </Icons>
          <Link>superuser.com</Link>
        </Anchor>
      </IconList>
    </IconContainer>
  );
};

export default LogoutIcon;
