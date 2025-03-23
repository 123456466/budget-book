import Button from "./components/Button";
import ContainerBox from "./components/ContainerBox";
import FormInput from "./components/FormInput";

function CreateExpense() {
  return (
    <ContainerBox>
      <form className="flex justify-center">
        <FormInput type="date" placeholder="" children="날짜" />
        <FormInput
          type="text"
          placeholder="내용을 입력해주세요"
          children="분류"
        />
        <FormInput
          type="number"
          placeholder="금액을 입력해주세요"
          children="금액"
        />
        <FormInput
          type="text"
          placeholder="내용을 입력해주세요"
          children="내용"
        />
        <Button children="제출" />
      </form>
    </ContainerBox>
  );
}

export default CreateExpense;
