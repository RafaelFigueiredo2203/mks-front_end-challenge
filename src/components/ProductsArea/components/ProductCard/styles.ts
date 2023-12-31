import styled from "styled-components";

export const ProductCardContainer = styled.div`
width: 218px;

background-color:#fff;
justify-self: center;

border-radius: 8px;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

div{
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 217.562px;
    height: 180px;
    margin-top: 14px;
    margin-bottom: 18px;
  }
}
`;

export const TitleProduct = styled.div`
max-width: 200px;
height: 38px;
margin-left: 14px;




h1{
  text-align: left;
color: #2C2C2C;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px; /* 118.75% */
}
`;

export const PriceDiv = styled.div`
  margin-left: 10px;
  padding: 5px;
  height: 26px;
  background-color: #373737;
  border-radius:8px;
  
  span{
  color: #FFF;
  
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 100% */
  }
  
`;

export const SubtitleProduct = styled.div`

width: 192px;
height: 80px;
flex-shrink: 0;
margin-left: 14px;
margin-top: 10px;

span{
color: #2C2C2C;

font-family: Montserrat;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: 12px; /* 120% */
}
`;

export const BuyButton = styled.button`
bottom:0;
width: 100%;
height: 31.907px;
margin-top:12px;
border: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

border-radius: 0px 0px 8px 8px;
background: #2563eb;
cursor: pointer;

&:hover{
    background-color:#0F52BA ;
    transition: 0.2s;
  }

  span{
color: #FFF;
padding-left: 10px;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
  }
`;