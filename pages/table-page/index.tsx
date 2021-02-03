import { Main } from '../../layout';

export default function TablePage() {
  return (
    <div>
      <Main>
        <table>
          <caption>Things to eat</caption>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Vegan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Peach</th>
              <td>1.99 €</td>
              <td>yes</td>
            </tr>
            <tr>
              <th scope="row">Cucumber</th>
              <td>0.99 €</td>
              <td>yes</td>
            </tr>
            <tr>
              <th scope="row">Cheeseburger</th>
              <td>7.99 €</td>
              <td>no</td>
            </tr>
            <tr>
              <th scope="row">Eggplant</th>
              <td>1.35 €</td>
              <td>yes</td>
            </tr>
          </tbody>
        </table>
      </Main>
    </div>
  );
}
