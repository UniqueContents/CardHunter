import { StaticImageData } from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import won50000 from "/public/images/50000won.png";
import won10000 from "/public/images/10000won.png";
import { media } from "@/styles/theme";

export default function Banner() {
  const creatMoney = () => {
    const money = Array.from("Falling Money!!!!");
    return money.map((_, idx) => {
      const delay = Math.random() * 8;
      const rand = Math.random() * 100;
      return (
        <Money
          key={idx}
          id={"money" + idx}
          delay={delay}
          image={rand > 35 ? won50000 : won10000}
        />
      );
    });
  };

  return <Wrapper>{creatMoney()}</Wrapper>;
}

interface MoneyProps {
  delay: number;
  image: StaticImageData;
}

const fall = keyframes`
	0% {
		opacity: 0;
	}
	3% {
		opacity: 0.9;
	}

	90% {
		opacity: 0.9;
	}
	100% {
		transform: translate(0, 50rem) rotateZ(360deg) rotateX(360deg);
		opacity: 0;
	}
`;

const Money = styled.div<MoneyProps>`
  opacity: 0;
  width: 10rem;
  height: 5rem;
  background-image: url(${(props) => props.image.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: ${fall} 8s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.mobile} {
    ${Money}:nth-child(3n) {
      visibility: hidden;
    }
  }
`;
