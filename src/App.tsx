
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { DashBoard } from "./components/Dashboard";
import { TransactionsTable } from "./components/TransactionsTable";

export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}