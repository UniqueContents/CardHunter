import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useAppDispatch } from "@/hook/redux";
import { ToggleTag } from "@/module/tags";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setInput((prev) => value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ToggleTag(input));
    setInput((prev) => "");
  };
  return (
    <Wrapper>
      <span>
        <BsSearch />
      </span>
      <form onSubmit={onSubmit}>
        <TagInput value={input} onChange={onChange} maxLength={8} />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  span {
    font-size: 2rem;
  }
  span::after {
    content: "|";
    margin: 0 1rem;
  }
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.lineColor};
  display: flex;
  align-items: center;
`;

const TagInput = styled.input`
  outline: none;
`;
