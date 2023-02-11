import { media } from "@/styles/theme";
import styled from "styled-components";

interface CardInfoProps {
  src: string;
  title: string;
  description: string;
  benefits: string[];
  mode?: "admin";
}

export default function CardInfo({
  src,
  title,
  description,
  benefits,
  mode,
}: CardInfoProps) {
  return (
    <Wrapper>
      <CardImg src={src} width="250px" height="150px" alt={title} />
      <Col>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BenefitConatiner>
          {benefits.map((benefit) => (
            <Benefit key={benefit}>#{benefit}</Benefit>
          ))}
        </BenefitConatiner>
      </Col>
      {mode === "admin" ? (
        <Buttons>
          <StyledButton>삭제</StyledButton>
          <StyledButton>수정</StyledButton>
        </Buttons>
      ) : null}
    </Wrapper>
  );
}

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 8rem;
  button + button {
    margin-top: 1rem;
  }
  ${media.mobile} {
    margin-left: 6rem;
  }
`;

const StyledButton = styled.button`
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.mainBgColor};

  ${(props) => props.theme.fontFamily}
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  padding: 1rem 2rem;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.lineColor};
  }
  &:hover {
    background-color: ${(props) => props.theme.subBgColor};
  }
`;

const CardImg = styled.img`
  width: 25rem;
  ${media.tablet} {
    width: 16.5rem;
    height: 10rem;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  p + p {
    margin-top: 1.5rem;
  }
  p + div {
    margin-top: 1.5rem;
  }
`;

const Title = styled.p`
  font-size: 3rem;
  ${media.tablet} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;

  ${media.tablet} {
    font-size: 1.5rem;
  }
  ${media.mobile} {
    display: none;
  }
`;

const BenefitConatiner = styled.div`
  span + span {
    margin-left: 1rem;
  }

  ${media.mobile} {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    span + span {
      margin-left: 0;
    }
  }
`;

const Benefit = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.subTextColor};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.mainTextColor};
  }
`;
