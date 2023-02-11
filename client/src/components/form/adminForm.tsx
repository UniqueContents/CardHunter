import { useEffect, useState } from "react";
import styled from "styled-components";

interface AdminFormProps {
  cardName: string;
  releaseDate: string;
  benefit: string[];
  image: File | null;
  onTextChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBenefitAdd: (benefits: string[]) => void;
  onBenefitRemove: (benefits: string[]) => void;
}

export default function AdminForm({
  cardName,
  releaseDate,
  benefit,
  image,
  onTextChange,
  onBenefitAdd,
  onBenefitRemove,
}: AdminFormProps) {
  const [benefitInput, setBenefitInput] = useState("");
  const onBenefitInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setBenefitInput((prev) => value);
  };
  const onTextAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (benefitInput !== "" && !benefit.includes(benefitInput)) {
      const newBenefit = [...benefit, benefitInput];
      onBenefitAdd(newBenefit);
    }
    setBenefitInput((prev) => "");
  };
  const onTextRemove = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const {
      currentTarget: { id },
    } = e;
    const newBenefit = benefit.filter((i) => i !== id);
    onBenefitRemove(newBenefit);
  };
  return (
    <StyledForm>
      <StyledInput
        type="text"
        name="cardName"
        placeholder="카드 이름"
        value={cardName}
        onChange={onTextChange}
      />
      <StyledInput
        type="text"
        name="releaseDate"
        placeholder="출시일"
        value={releaseDate}
        onChange={onTextChange}
      />
      <BenefitBlock>
        <BenefitInput>
          <StyledInput
            type="text"
            name="benefit"
            placeholder="혜택"
            value={benefitInput}
            onChange={onBenefitInputChange}
          />
          <StyledBtn onClick={onTextAdd}>추가</StyledBtn>
        </BenefitInput>
        <BenefitShow>
          {benefit.map((benefit) => (
            <Benefit id={benefit} onClick={onTextRemove}>
              {benefit}
            </Benefit>
          ))}
        </BenefitShow>
      </BenefitBlock>
      <StyledInput type="file" name="image" placeholder="카드 이미지" />
      <StyledBtn type="button">등록</StyledBtn>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  width: 100%;
`;
const StyledBtn = styled.button`
  min-width: 5rem;
`;
const BenefitBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const BenefitInput = styled.div`
  display: flex;
`;
const Benefit = styled.span`
  font-size: 1.5rem;
`;

const BenefitShow = styled.div`
  ${Benefit} + ${Benefit} {
    margin-left: 1rem;
  }
`;
