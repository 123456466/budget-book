import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";

function Home() {
  return (
    <div>
      <MonthNavigation />
      <ExpenseList />
    </div>
  );
}

export default Home;
