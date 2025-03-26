import supabase from "../api/supabase";
import { Button, DelButton } from "./components/Button";
import ContainerBox from "./components/ContainerBox";

function ExpenseList() {
  const fetchData = async () => {
    const { data } = await supabase.from("expenses").select("*");
    console.log(data);
  };

  return (
    <ContainerBox>
      <div className="flex mx-10 items-center">
        <div className="mr-auto">
          <div>날짜</div>
          <div>카테고리</div>
          <div>내용</div>
        </div>
        <Button children="수정" onClick={fetchData} />
        <DelButton children="삭제" onClick={null} />
      </div>
    </ContainerBox>
  );
}

export default ExpenseList;
