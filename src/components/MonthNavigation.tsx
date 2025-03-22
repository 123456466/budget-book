import MonthBox from "./components/MonthBox";

function MonthNavigation() {
  return (
    <div className="bg-white p-5 rounded-md outline-blue-500 outline-2 mt-15">
      <div className="flex justify-center">
        <MonthBox chldren="1월" />
        <MonthBox chldren="2월" />
        <MonthBox chldren="3월" />
        <MonthBox chldren="4월" />
        <MonthBox chldren="5월" />
        <MonthBox chldren="6월" />
      </div>
      <div className="flex justify-center">
        <MonthBox chldren="7월" />
        <MonthBox chldren="8월" />
        <MonthBox chldren="9월" />
        <MonthBox chldren="10월" />
        <MonthBox chldren="11월" />
        <MonthBox chldren="12월" />
      </div>
    </div>
  );
}

export default MonthNavigation;
