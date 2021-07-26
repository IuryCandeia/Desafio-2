import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    .form-label{ 
        height: 24px;
        width: 231px;
        color: #333333;
        font-family: 'Roboto',sans-serif;
        font-size: 16px;
        line-height: 24px;
    }
    .form-input {
      box-sizing: border-box;
      height: 39px;
      width: 426px;
      border: 2px solid #e6e6e6;
      border-radius: 10px;
      font-family: 'Roboto',sans-serif;
      border-color: #1abc9c;
      margin: auto;
      text-align: justify;
    }
    .myButtonModal{
        box-shadow: 0px -3px 14px 0px #f0f7fa;
    background:linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
    background-color:#33bdef;
    border-radius:42px;
    border:2px solid #057fd0;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:'Roboto',sans-serif;
    font-size:18px;
    padding:4px 15px;
    margin-left: 20px;
    display: block;
    margin:2em 0 0 9em;
    text-decoration:none;
    text-shadow:-2px -2px 0px #5b6178;
      justify-content: space-around;
    &:hover {
    background:linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color:#019ad2;
    }
    &:active {
      position:relative;
      top:1px;
    }
    }
`;
