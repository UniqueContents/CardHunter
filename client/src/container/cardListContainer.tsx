import CardInfo from "@/components/card/cardInfo";
import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { getCardInfo } from "@/module/tags";
import { useEffect } from "react";
import styled from "styled-components";

const description =
  "카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명카드설명";

export default function CardListCotainer() {
  const { tags, cardInfo } = useAppSelector((state) => state.tags);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCardInfo(tags));
  }, [tags]);

  return (
    <Wrapper>
      {/* Props 넘기는 방식은 추후에 변경예정 */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <CardInfo
          key={item}
          src={"/images/card.png"}
          benefits={["혜택1", "혜택2", "혜택3"]}
          description={description}
          title={"카드이름"}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.tagContainerBgColor};
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 3rem;
  ${(props) => props.theme.boxShadow}
  ${(props) => props.theme.fontFamily}
`;
