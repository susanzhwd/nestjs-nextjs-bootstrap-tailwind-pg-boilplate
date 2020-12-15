import tw, { css, styled } from 'twin.macro';
import SocialButton from './SocialButton';

export const StyledFormWrapper = styled.div(
  () => tw`container mx-auto text-center`,
);

export const StyledForm = styled.div(() => tw`px-4 mb-8 bg-white`);

export const StyledHintText1 = styled.div(
  () => tw`mb-1 text-base text-gray-700`,
);

export const StyledHintText2 = styled.div(() => [
  tw`mb-3 text-base font-medium text-black`,
  css`
    & a {
      color: #5cb85c;
    }
    & a:hover {
      text-decoration: underline;
    }
  `,
]);

export const StyledOrSeperator = styled.div(() => [
  tw`mt-8 border-t border-gray-400`,
  css`
    & b {
      color: #aaa;
      padding: 0 6px;
      width: 33px;
      height: 33px;
      font-size: 12px;
      text-align: center;
      line-height: 30px;
      background: #fff;
      display: inline-block;
      border: 1px solid #e0e0e0;
      border-radius: 50%;
      position: relative;
      top: -18px;
      z-index: 1;
    }
  `,
]);

export const StyledSocialButtonGroup = styled.div(() => tw`text-center`);

export const StyledSocialButton = styled(SocialButton)(
  () =>
    tw`w-32 p-1 mx-1 text-base font-medium text-black text-white rounded-lg focus:outline-none`,
);

export const StyledFormGrid = styled.div(() => tw`grid grid-cols-6 gap-6`);
export const StyledFormRow = styled.div(() => tw`col-span-6 sm:col-span-6`);
export const StyledFormInput = styled.input(
  () =>
    tw`block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-indigo-500 sm:text-xl`,
);
export const StyledFormButton = styled.button(
  () =>
    tw`block w-full py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 sm:text-xl`,
);
export const StyledFormAgree = styled.div(() => tw`mt-3 text-base`);
