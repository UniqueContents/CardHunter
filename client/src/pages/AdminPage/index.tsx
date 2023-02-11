import CardListCotainer from "@/container/cardListContainer";
import TagsContainer from "@/container/tagsConatiner";
import { media } from "@/styles/theme";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function AdminPage() {
  const router = useRouter();
  const addCard = () => {
    router.push("/AdminPage/addCard");
  };
  return (
    <Wrapper>
      <About>
        <TextField>
          <Title>관리자 페이지</Title>
          <AddButton onClick={addCard}>카드 추가</AddButton>
        </TextField>
      </About>
      <FliterWrapper>
        <Title>조건식</Title>
        <TagsContainer />
        <CardListCotainer mode="admin" />
      </FliterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to top,
    ${(props) => props.theme.mainBgColor},
    white
  );
`;

const About = styled.div`
  position: relative;
  min-height: 80rem;
  width: 100%;
  display: flex;
  justify-content: center;
  ${media.mobile} {
    min-height: 60rem;
  }
`;

const FliterWrapper = styled.div`
  margin-top: 5rem;
  width: 40%;
  z-index: 20;
  ${media.custom(3000)} {
    min-width: 100rem;
  }
  ${media.desktop} {
    width: 80%;
    min-width: 0;
  }
  ${media.tablet} {
    width: 90%;
    min-width: 0;
  }
  ${media.mobile} {
    width: 100%;
    min-width: 360px;
  }
`;

const TextField = styled.div`
  position: absolute;
  top: 50%;
  ${media.custom(3000)} {
    left: 20%;
  }
  ${media.desktop} {
    left: 15%;
  }
  ${media.tablet} {
    left: 5%;
  }
  ${media.mobile} {
    left: 0%;
  }
`;

const Title = styled.p`
  position: relative;
  font-size: 5rem;
  ${(props) => props.theme.fontFamily}
  margin-bottom: 1rem;
  z-index: 10;
  ${media.mobile} {
    font-size: 3.5rem;
  }
`;

const AddButton = styled.button`
  font-size: 2.5rem;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.subBgColor};
  ${(props) => props.theme.fontFamily}
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.mainBgColor};
  }
`;
