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
@media (max-width: 473px) {
 padding:28px 20px 28px;
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
export const TotalDiv = styled.div`
width:100%;
height:50px;
background-color: ${props => props.theme.blue};
display: flex;
align-items: center;
justify-content: space-between;

span{
color: #FFF;

font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 15px; /* 53.571% */
}
`;

export const FinalyBuyButton = styled.button`
width: 100%;
height: 50px;
background: #000;
border-radius: 8px;
span{
color: #FFF;

font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 15px; /* 53.571% */
}

&:hover{
    background-color: #111827;
    transition: 0.2s;
  }
`;

export const Span = styled.span`
color: #FFF;

font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

