import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { adminLogin, changeState } from "@/module/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId, userPwd, auth } = useAppSelector((state) => state.login);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, name: type },
    } = e;

    if (type === "userId") {
      dispatch(changeState({ type, value }));
    } else if (type === "userPwd") {
      dispatch(changeState({ type, value }));
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(adminLogin({ email: userId, password: userPwd }));
  };
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const preToken = localStorage.getItem("access_token");
    if (preToken) {
      // 서버에 유효 토큰인지 확인 후
      // 유효 토큰이면 AdminPage로 보내기
      // 그렇지 않으면 로그인 계속 및 로컬스토리지에서 토큰 삭제
      router.replace("/AdminPage");
    } else {
      setLogin((prev) => true);
    }
  }, []);

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("access_token", auth.token);
      router.push("/AdminPage");
    }
  }, [auth.token]);

  return login ? (
    <Wrapper>
      <Logo href={"/"}>Unique Contents</Logo>
      <StyledLoginForm onSubmit={onSubmit}>
        <StyledInput
          placeholder="아이디를 입력하세요"
          type="text"
          value={userId}
          name="userId"
          onChange={onChange}
        />
        <StyledInput
          placeholder="비밀번호를 입력하세요"
          type="password"
          value={userPwd}
          name="userPwd"
          onChange={onChange}
        />
        {auth.loading === "Unauthenticated" ? (
          <ErrorMsg>아이디 또는 비밀번호가 잘못되었습니다.</ErrorMsg>
        ) : null}
        <StyledBtn type="submit">로그인</StyledBtn>
      </StyledLoginForm>
    </Wrapper>
  ) : null;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${(props) => props.theme.lineColor};
  ${(props) => props.theme.boxShadow}
  padding: 2rem 3rem;
`;

const Logo = styled(Link)`
  font-weight: 600;
  font-size: 4rem;
  background: linear-gradient(135deg, red, purple);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 80%;
  input + input {
    margin-top: 1rem;
  }
  input + button {
    margin-top: 3rem;
  }
  button {
    margin-bottom: 5rem;
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 0.3rem solid rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  font-size: 2rem;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: ${(props) => props.theme.mainBgColor};
  }
  &::placeholder {
    font-size: 1.8rem;
  }
`;

const StyledBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  font-size: 2rem;
  ${(props) => props.theme.fontFamily}
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 1rem;
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin: 1.5rem 0;
  background-color: #ff000099;
  color: white;
  padding: 1rem 0;
  border-radius: 0.5rem;
`;
