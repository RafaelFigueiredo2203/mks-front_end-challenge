import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
height: 101px ;
background-color: ${props => props.theme.blue};
padding: 28px 80px 28px ;

display: flex;
align-items: center;
justify-content: space-between;

div{
  display: flex;
  flex-direction: row;
  align-items: center;
  
  h1{
    margin-right: 5px;
    font-size: 40px;
    color: ${props => props.theme["white-text"]};
  }
  span{
    padding-top:5px ;
    font-size: 20px;
    color: ${props => props.theme["white-text"]};
    font-weight: 300;
  }
}
`
export const ButtonCart = styled.button`
  width:90px;
  height: 45px;
  border: 0;
  border-radius: 8px;
  background-color: #fff;
  

  cursor: pointer;

  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover{
    background-color: ${props => props.theme["gray-300"]};
    transition: 0.2s;
  }

`;

