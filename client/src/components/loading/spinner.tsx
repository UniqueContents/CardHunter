import styled, { keyframes } from "styled-components";

export default function Spinner() {
  return (
    <Wrapper>
      <StyledSpinner />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const SpinnerAnimation = keyframes`
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 1rem solid ${(props) => props.theme.subBgColor};
  border-top-color: ${(props) => props.theme.mainBgColor};
  animation: ${SpinnerAnimation} 1s linear infinite;
`;
