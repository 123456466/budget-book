import { Button, DelButton } from "./components/Button";
import ContainerBox from "./components/ContainerBox";

function ExpenseList() {
  return (
    <ContainerBox>
      <div className="flex mx-10 items-center">
        <div className="mr-auto">
          <div>날짜</div>
          <div>카테고리</div>
          <div>내용</div>
        </div>
        <Button children="수정" />
        <DelButton children="삭제" />
      </div>
    </ContainerBox>
  );
}

export default ExpenseList;
