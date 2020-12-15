import * as nextImage from 'next/image';
import React from 'react';
import ReactModal from 'react-modal';
import { GlobalStyles } from 'twin.macro';
import '../src/styles/tailwind.css';

ReactModal.setAppElement('#root');
// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   layout: 'centered',
//   backgrounds: {
//     default: 'electric-ribbon',
//     values: [
//       {
//         name: 'electric-ribbon',
//         value: `linear-gradient(180deg, ${theme`colors.electric`}, ${theme`colors.ribbon`})`,
//       },
//     ],
//   },
// };

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});
