import CreateExpense from "../components/CreateExpense";
import MonthNavigation from "../components/MonthNavigation";

function Home() {
  return (
    <div>
      <MonthNavigation />
      <CreateExpense />
    </div>
  );
}

export default Home;
