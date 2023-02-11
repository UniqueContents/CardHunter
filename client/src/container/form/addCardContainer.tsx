import AdminForm from "@/components/form/adminForm";
import { useState } from "react";
import styled from "styled-components";

interface IForm {
  cardName: string;
  releaseDate: string;
  benefit: string[];
  image: File | null;
}

export default function AddCardContainer() {
  const [form, setForm] = useState<IForm>({
    cardName: "",
    releaseDate: "",
    benefit: [],
    image: null,
  });

  console.log(form);

  const onBenefitAdd = (benefit: string[]) => {
    setForm((prev) => ({ ...prev, benefit }));
  };
  const onBenefitRemove = (benefit: string[]) => {
    setForm((prev) => ({ ...prev, benefit }));
  };
  const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, name },
    } = e;

    if (name === "cardName" || name === "releaseDate") {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <Wrapper>
      <AdminForm
        cardName={form.cardName}
        releaseDate={form.releaseDate}
        benefit={form.benefit}
        image={form.image}
        onTextChange={onTextChange}
        onBenefitAdd={onBenefitAdd}
        onBenefitRemove={onBenefitRemove}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
