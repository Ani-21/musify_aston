import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  // width: 70%;
  margin: 0 auto;
  // background-color: beige;
  background-image: linear-gradient(to right, #2a341f, #6d6e2c);
  height: 100vh;

  label {
    margin-bottom: 10px;
  }

  input {
    height: 70px;
    padding: 5px;
    margin-bottom: 30px;
    width: 30%;
    background-color: transparent;
    border: 1px solid rgb(128, 128, 128);
  }

  input:focus {
    outline: none;
    border-color: rgb(175, 153, 114);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
`;
