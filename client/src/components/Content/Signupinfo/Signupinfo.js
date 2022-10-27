import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: #f1f2f3;
  > div:first-of-type {
    flex-basis: 10%;
    width: 422px;
    height: 55px;
    font-size: 21px;
    text-align: center;
    margin: 20px;
  }
  > section.social_buttons {
    flex-basis: 20%;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 316px;
      height: 138px;
    }
    > div > button {
      /* width: 316px; */
      height: 38px;
      margin: 4px;
      border: 1px;
      border-radius: 5px;
      cursor: pointer;
      :first-of-type {
        background-color: white;
        :hover {
          background-color: #f8f9f9;
        }
      }
      :nth-of-type(2) {
        background-color: #232628;
        color: white;
        :hover {
          background-color: black;
        }
      }
      :nth-of-type(3) {
        background-color: #3a5796;
        color: white;
        :hover {
          background-color: #304a86;
        }
      }
    }
  }
  > section.form_container {
    flex-basis: 70%;
    margin: 20px 52px 24px 52px;
    width: 316px;
    height: 400px;
    padding: 24px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    > form {
      display: flex;
      flex-direction: column;
      width: 268px;
      height: 400px;
    }
    > form > div {
      /* flex-grow: 70%; */
      /* flex: 0 1 auto; */
      width: 268px;
      height: 80px;
      margin: 6px 0;
      display: flex;
      flex-direction: column;
      /* :last-of-type {
        height: 100px;
      } */
      > label {
        flex-basis: 25%;
        /* width: 268px;
        height: 35px; */
        margin: 2px 0;
        font-size: 14px;
      }
      > input {
        flex-basis: 45%;
        /* width: 268px;
        height: 35px; */
      }
      > p {
        flex-basis: 30%;
        font-size: 12px;
        /* width: 268px;
        height: 60px; */
        height: fit-content;
        padding: 2px;
      }
    }
    > form > button.sign_up_btn {
      /* flex-grow: 30%; */
      /* flex: 0 1 auto; */
      position: relative;
      top: 15%;
      width: 268px;
      height: 38px;
      background-color: #0a95ff;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      color: white;
      cursor: pointer;
      :hover {
        background-color: #0074cc;
      }
    }
  }
`;
export default SignUp;