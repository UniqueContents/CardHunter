import LoginForm from "@/container/auth/loginForm";
import styled from "styled-components";

export default function login() {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
