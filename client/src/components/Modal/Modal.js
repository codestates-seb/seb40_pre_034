import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(60, 60, 60, 0.643);
  opacity: 0.6;
  z-index: 99;
  animation: 0.3s;
`;
export const ModalArticle = styled.article`
  padding: 25px;
  display: block;
`;
export const ModalContainer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgb(143 143 143 / 90%) 1px 1px 3px;
  box-sizing: border-box;
  z-index: 100;
  overflow: hidden;
  width: 450px;
  height: 435px;
  animation: 0.3s ease-out 0s 1 normal forwards running cJoqxJ;
  border-radius: 10px;
  left: 50%;
  top: 50%;
`;
export const ModalTitle = styled.h2`
  font: revert;
  margin-bottom: 15px;
  color: "#000000";
`;
export const ModalContent = styled.div`
  color: var(--black-700);
  font-size: 0.95rem;
  line-height: 1.2rem;
  margin-bottom: 25px;
`;
export const HeaderContent = styled.p`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 25px;
`;
export const MiddleContent = styled(HeaderContent)`
  a {
    color: blue;
  }
`;
export const FooterContent = styled.ol`
  display: flex;
  flex-flow: column wrap;
  row-gap: 15px;
  padding-left: 20px;
  margin: 25px 0px;
`;
export const FooterContentEl = styled.li`
  list-style: none;
`;
export const Explain = styled.p`
  font-size: 0.8rem;
`;
export const BottomArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 17px;
  padding: 5px 10px;
`;
export const Xbutton = styled(VscChromeClose)`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 4%;
  top: 3%;
  cursor: pointer;
  box-sizing: border-box;
`;

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, []);
  return (
    <>
      <ModalBackground>
        {openModal == true ? (
          <ModalContainer>
            <ModalArticle>
              <Xbutton
                onClick={() => {
                  setOpenModal(false);
                }}
              ></Xbutton>
              <ModalTitle>Asking a good question</ModalTitle>
              <ModalContent>
                <HeaderContent>
                  You’re ready to ask your first programming-related question and the community is here to help! To get
                  you the best answers, we’ve provided some guidance:
                </HeaderContent>
                <MiddleContent>
                  Before you post, <a href="https://stackoverflow.com/search">search the site</a> to make sure your
                  question hasn’t been answered.
                </MiddleContent>
                <FooterContent>
                  <FooterContentEl>Summarize the problem</FooterContentEl>
                  <FooterContentEl>Describe what you’ve tried</FooterContentEl>
                  <FooterContentEl>When appropriate, show some code</FooterContentEl>
                </FooterContent>
                <Explain>You’ll find more tips in the sidebar.</Explain>
              </ModalContent>
              <BottomArea></BottomArea>
            </ModalArticle>
          </ModalContainer>
        ) : null}
      </ModalBackground>
    </>
  );
};
export default Modal;
