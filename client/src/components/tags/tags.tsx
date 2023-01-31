import React from "react";
import { useAppDispatch } from "@/hook/redux";
import styled from "styled-components";
import { ToggleTag } from "@/module/tags";

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(ToggleTag(name));
  };
  return <StyleTag onClick={onClick}>{name}</StyleTag>;
};

const StyleTag = styled.li`
  margin: 0.15rem 0;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.cardBgColor};
  }
`;

interface TagsProps {
  name: string;
  options: string[];
}

function Tags({ name, options }: TagsProps) {
  return (
    <Wrapper>
      <span>{name}</span>
      <StyleTags>
        {options.map((name) => (
          <Tag key={name} name={name} />
        ))}
      </StyleTags>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  span::after {
    content: "|";
    margin: 0 1rem;
  }
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.lineColor};
`;

const StyleTags = styled.ul`
  display: flex;
  align-items: center;
  font-weight: 600;

  li + li {
    margin-left: 0.5rem;
  }
`;

export default React.memo(Tags);
