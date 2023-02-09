import Search from "@/components/tags/search";
import SelectedTags from "@/components/tags/selectedTags";
import Tags from "@/components/tags/tags";
import { useAppSelector } from "@/hook/redux";
import styled from "styled-components";

const optionsFilter = (arr: string[], tags: string[]): string[] => {
  return arr.filter((tag) => !tags.includes(tag));
};

export default function TagsContainer() {
  const { tags } = useAppSelector((state) => state.tags);
  return (
    <TagsWrapper>
      {/* Props 넘기는 방식은 추후에 변경 예정 */}
      <Search />
      <Tags
        name="카드사"
        options={optionsFilter(
          [
            "국민은행",
            "신한은행",
            "기업은행",
            "제주은행",
            "농협",
            "카카오뱅크",
          ],
          tags
        )}
      />
      <Tags
        name="혜택"
        options={optionsFilter(["유튜브", "전자제품", "외식"], tags)}
      />
      <Tags
        name="월 사용액"
        options={optionsFilter(["10만~", "20만~", "50만~"], tags)}
      />
      <SelectedTags tags={tags} />
    </TagsWrapper>
  );
}

const TagsWrapper = styled.div`
  background-color: ${(props) => props.theme.tagContainerBgColor};
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  ${(props) => props.theme.boxShadow}
  ${(props) => props.theme.fontFamily}
`;
