import { useAppDispatch } from "@/hook/redux";
import { removeTag } from "@/module/tags";
import styled from "styled-components";

interface SelectedTagProps {
  name: string;
}

const SelectedTag = ({ name }: SelectedTagProps) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(removeTag(name));
  };
  return <Tag onClick={onClick}>{name}</Tag>;
};

const Tag = styled.div`
  font-weight: 600;
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 0.5rem 1rem;

  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    padding-right: 2.5rem;
  }
  &:hover::before {
    content: "X";
    color: red;
    position: absolute;
    right: 1rem;
  }
`;

interface SelectedTagsProps {
  tags: string[];
}

export default function SelectedTags({ tags }: SelectedTagsProps) {
  return (
    <Wrapper>
      <span>필터</span>
      {tags.map((tag) => (
        <SelectedTag key={tag} name={tag} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  div + div {
    margin-left: 1rem;
  }
  span::after {
    content: "|";
    margin: 0 1rem;
  }
`;
