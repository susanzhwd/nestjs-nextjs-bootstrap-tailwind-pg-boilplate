import tw, { styled } from 'twin.macro';

export const StyledInput = styled.input`
  && {
    font-size: 14px;
    transition: all 0.4s;
    box-shadow: none;
    border-radius: 50px;
    outline: none;
  }
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  & form {
    border-radius: 5px;
    margin-bottom: 20px;
    background: #fff;
    padding: 0px 10px;
  }
  & a {
    color: #5cb85c;
  }
  & h2 {
    text-align: center;
    font-size: 28px;
    margin: 10px 0 15px;
  }
  & .hint-text {
    color: #999;
    text-align: center;
    font-size: 12px;
    margin-bottom: 5px;
  }
  & .signInUp-text {
    font-size: 14px;
    font-weight: bold;
    margin: 0px auto;
    margin-bottom: 10px;
  }
  & .form-group {
    margin-bottom: 20px;
  }
  & .btn {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
  }
  & .social-btns .btn {
    color: #fff;
    margin: 10px 0 0 15px;
    font-size: 13px;
    border-radius: 50px;
    font-weight: normal;
    border: none;
    transition: all 0.4s;
  }
  & .social-btns .btn:first-child {
    margin-left: 0;
  }
  & .social-btns .btn:hover {
    opacity: 0.8;
  }
  & .social-btns .btn-primary {
    background: #507cc0;
  }
  & .social-btns .btn-info {
    background: #64ccf1;
  }
  & .social-btns .btn-danger {
    background: #df4930;
  }
  & .social-btns .btn i {
    float: left;
    margin: 3px 10px;
    font-size: 20px;
  }
  & .social-btns button {
    width: 110px;
    line-height: 16px;
  }
  & .or-seperator {
    margin: 30px 0 0;
    text-align: center;
    border-top: 1px solid #e0e0e0;
  }
  & .or-seperator b {
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
  & .form-control {
    font-size: 14px;
    transition: all 0.4s;
    box-shadow: none;
    height: 32px;
  }
  & .form-control:focus {
    border-color: #5cb85c;
  }
  & .form-control,
  .btn {
    line-height: 14px;
    border-radius: 50px;
    outline: none !important;
  }
  .agree {
    font-size: 13px;
    text-align: center;
  }
`;
