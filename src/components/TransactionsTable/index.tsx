import { Container } from "./style";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento de WebSite</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>16/01/2021</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de WebSite</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>16/01/2021</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de WebSite</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>16/01/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}