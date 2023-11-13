import styled from "styled-components";

export const ResumeProductContainer = styled.div`
width: 300px;
height: 95px;
border-radius: 8px;
background: #FFF;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 20px;

box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

img{
margin-left: -10px;
width: 40px;
height: 51px;
}
`;

export const TitleProduct = styled.div`
width: 95px;
height: 33px;
margin-left:10px;
margin-bottom: 30px;

span{
color: #2C2C2C;
text-align: center;


font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 17px; /* 130.769% */
}
`;

export const QtdContainer = styled.div`
width: 50px;
height: 19px;
margin-left:5px ;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 4px;
border: 0.3px solid #BFBFBF;

background: #FFF;

span{
color: #000;

font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`;

export const QtdControllerButton = styled.div`
width: 100%;
height: 18px;
background: transparent;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover{
    background-color: #BFBFBF;
    transition: 0.2s;
  }
`;

export const QtdSpan = styled.p`

position: absolute;
margin-top: -30px;
margin-left: -5px;
color: #000;

font-family: Montserrat;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const PriceProduct =styled.span`
color: #000;
margin-left:5px ;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 17px; /* 121.429% */
`;

export const RemoveProductButton = styled.button`
position: absolute;
width: 18px;
height: 18px;
background-color:#000;
border-radius:100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

margin-bottom:85px;
margin-left: 285px
`;