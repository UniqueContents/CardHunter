import { media } from "@/styles/theme";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);

  useEffect(() => {
    const isTop = () => {
      let value = window.scrollY;
      if (value === 0 && !isScrollTop) {
        setIsScrollTop(true);
      } else if (value !== 0 && isScrollTop) {
        setIsScrollTop(false);
      }
    };
    isTop();
    window.addEventListener("scroll", isTop);
    return () => {
      window.removeEventListener("scroll", isTop);
    };
  }, [isScrollTop]);

  return (
    <Wrapper isTop={isScrollTop}>
      <HeaderBlock>
        <HeaderCol>
          <Logo href={"/"}>Unique Contents</Logo>
        </HeaderCol>
        <HeaderCol></HeaderCol>
      </HeaderBlock>
    </Wrapper>
  );
}

interface IsTopProps {
  isTop: boolean;
}

const Wrapper = styled.div<IsTopProps>`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 6rem;
  position: fixed;
  ${(props) => props.theme.boxShadow}
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.isTop ? "none" : props.theme.headerNTop};
  transition: background-color 0.2s ease-in-out;
  z-index: 40;
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  font-size: 2.5rem;
  ${media.desktop} {
    width: 70%;
  }
  ${media.tablet} {
    width: 85%;
  }
  ${media.mobile} {
    width: 100%;
    font-size: 2rem;
  }
`;

const HeaderCol = styled.div``;

const Logo = styled(Link)`
  font-weight: 600;
  background: linear-gradient(135deg, red, purple);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
