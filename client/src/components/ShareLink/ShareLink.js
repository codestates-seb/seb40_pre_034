import styled from "styled-components";
import { CardStyle } from "../SideCard/CardStyle";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

const ShareLinkModal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const TitleArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 6px;
  margin: 5px 0;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
const Desc = styled.div`
  padding-left: 5px;
  font-size: 12px;
`;
const InputArea = styled.div`
  padding: 5px;
`;
const Input = styled.input`
  width: 250px;
  cursor: not-allowed;
`;
const LinkArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
`;
const CopyLink = styled.button`
  border: 0;
  outline: 0;
  background: none;
  color: hsl(206, 100%, 40%);
  font-size: 11px;
`;
const Anchor = styled.a`
  text-decoration-line: none;
  color: hsl(206, 100%, 40%);
  font-size: 11px;
`;
const Social = styled.div``;
const SocialBtn = styled.button`
  padding: 5px;
  border: 0;
  outline: 0;
  background: none;
`;

const ShareLink = () => {
  const text = window.location.href;

  const onClickHandler = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied");
    });
  };

  return (
    <CardStyle>
      <ShareLinkModal>
        <TitleArea>
          <Title>Share a link to this question</Title>
          <Desc>(Includes your user id)</Desc>
        </TitleArea>
        <InputArea>
          <Input readOnly value={text} />
        </InputArea>
        <LinkArea>
          <CopyLink onClick={() => onClickHandler(text)}>Copy link</CopyLink>
          <Anchor href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license" target="_blank">
            CC BY-SA 4.0
          </Anchor>
          <Social>
            <SocialBtn role="button" aria-label="Share on Facebook">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                  fill="#4167B2"
                ></path>
              </svg>
            </SocialBtn>
            <SocialBtn role="button" aria-label="Share on Twitter">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M17 4.04c-.59.26-1.22.44-1.88.52a3.3 3.3 0 0 0 1.44-1.82c-.64.37-1.34.64-2.09.79a3.28 3.28 0 0 0-5.6 2.99A9.3 9.3 0 0 1 2.12 3.1a3.28 3.28 0 0 0 1.02 4.38 3.28 3.28 0 0 1-1.49-.4v.03a3.29 3.29 0 0 0 2.64 3.22 3.34 3.34 0 0 1-1.48.06 3.29 3.29 0 0 0 3.07 2.28 6.58 6.58 0 0 1-4.85 1.36 9.33 9.33 0 0 0 5.04 1.47c6.04 0 9.34-5 9.34-9.33v-.42a6.63 6.63 0 0 0 1.63-1.7L17 4.04Z"
                  fill="#2AA3EF"
                ></path>
              </svg>
            </SocialBtn>
            <SocialBtn role="button" aria-label="Share on DEV">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M15 1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h12Zm-3 5.02h-1.18l1.4 5.24c.36.86 1.16 1.1 1.65.13l.06-.13 1.39-5.24h-1.18l-1.07 4.12L12 6.02Zm-1.96 0H7.75a.72.72 0 0 0-.7.65l-.01.1v4.53c0 .37.29.67.65.7l.1.01h2.25v-1.07H8.1V9.26h1.18V8.19H8.1v-1.1h1.93V6.02Zm-5.32 0H3v5.99h1.68c1.33 0 1.75-1.03 1.75-1.71V7.73c0-.68-.43-1.71-1.71-1.71Zm.06 1.12a.7.7 0 0 1 .42.16c.14.1.21.26.21.47v2.52c0 .21-.07.37-.2.47a.7.7 0 0 1-.43.16h-.63V7.14h.63Z"
                  fill="#010101"
                ></path>
              </svg>
            </SocialBtn>
          </Social>
        </LinkArea>
      </ShareLinkModal>
    </CardStyle>
  );
};

export default ShareLink;
