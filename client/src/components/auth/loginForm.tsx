import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { changeState } from "@/module/auth";
import Link from "next/link";
import styled from "styled-components";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const { userId, userPwd } = useAppSelector((state) => state.login);
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
  };
  return (
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
        <StyledBtn type="submit">로그인</StyledBtn>
      </StyledLoginForm>
    </Wrapper>
  );
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
