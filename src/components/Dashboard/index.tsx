import { Summary } from "../Summary";
import { Container } from "./style";
import { TransactionsTable } from "../TransactionsTable";


export function DashBoard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />

    </Container>
  )
}