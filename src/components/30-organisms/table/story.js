import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Table', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Table',
    () =>`
      <h3>AXA Table Default</h3>
      <axa-table>
          <table class="any-for-test">
            <thead>
              <tr>
                <th>Titel 1</th>
                <th>Titel 2</th>
                <th>Titel 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body 1</td>
                <td class="o-table--light">Longer Body 2</td>
                <td class="o-table--bold">Super Long Body 3 </td>
              </tr>
              <tr>
                <td>Body A1 AA</td>
                <td class="o-table--light">Longer Body A2</td>
                <td class="o-table--bold">Super Long Body A3 </td>
              </tr>
              <tr>
                <td>Body B1</td>
                <td class="o-table--light">Longer Body B2</td>
                <td class="o-table--bold">Super Long Body B3 </td>
              </tr>
            </tbody>
          </table>
      </axa-table>
      <br/>
      <br/>

      <h3>AXA Table innerscroll:</h3>
      <axa-table innerscroll="500">
          <table class="any-for-test">
            <thead>
              <tr>
                <th>Titel 1</th>
                <th>Titel 2</th>
                <th>Titel 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body 1</td>
                <td class="o-table--light">Longer Body 2</td>
                <td>Super Long Body 3 </td>
              </tr>
              <tr>
                <td>Body A1 AA</td>
                <td class="o-table--light">Longer Body A2</td>
                <td>Super Long Body A3 </td>
              </tr>
              <tr>
                <td>Body B1</td>
                <td class="o-table--light">Longer Body B2</td>
                <td>Super Long Body B3 </td>
              </tr>
            </tbody>
          </table>
      </axa-table>
      `
  );
