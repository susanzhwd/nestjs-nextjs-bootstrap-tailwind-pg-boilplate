import tw, { css, styled, theme } from 'twin.macro';

interface ButtonProps {
  type?: string;
  isSmall?: boolean;
}

export const Button = styled.button(
  ({ type = 'primary', isSmall = false }: ButtonProps) => [
    // The common button styles added with the tw import
    tw`px-8 py-2 text-lg rounded focus:outline-none`,
    tw`transition-transform duration-75 transform`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hover:scale-105 hover:text-yellow-400`,

    // Use props to conditionally style your components
    type === 'primary' && tw`text-white bg-black border-black`,

    // Combine regular css with tailwind classes within backticks
    type === 'secondary' && [
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
      `,
      tw`border-2 border-yellow-600`,
    ],

    // Conditional props can be used
    isSmall ? tw`text-sm` : tw`text-lg`,

    // The theme import can supply values from your tailwind.config.js
    css`
      color: ${theme`colors.white`};
    `,
  ],
);
