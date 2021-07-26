import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;

  section {
    height: 100vh;
    width: 100%;
    background-image: url("https://i1.wp.com/data.freehdw.com/light-blue-pattern-background.jpg");
    background-repeat: no-repeat;
    display: flex;
  }

  .buttonPosition1 {
    margin-top: 80%;
    margin-left: 100%;
  }
  .buttonPosition2 {
    margin-top: -22%;
    margin-left: 250%;
  }
  header {
    padding: 30px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    background: #019ad2;
    color: white;
    font-size: 15px;
  }

  footer {
    padding: 30px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    background: #019ad2;
    color: white;
    font-size: 15px;
  }
  
  .myButton {
    box-shadow: 0px -3px 14px 0px #f0f7fa;
    background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
    background-color: #33bdef;
    border-radius: 42px;
    border: 2px solid #057fd0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: "Robot", sans-serif;
    font-size: 18px;
    padding: 11px 76px;
    text-decoration: none;
    text-shadow: -2px -2px 0px #5b6178;
    &:hover {
      background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
      background-color: #019ad2;
    }
    &:active {
      position: relative;
      top: 1px;
    }
  }
`;
export default Container;
