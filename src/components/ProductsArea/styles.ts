import styled from "styled-components";

export const ProductArea = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 0;

`;

export const ProductGridContainer = styled.div`
width: 938px;
display: grid;
margin-top:116px ;
margin-bottom: 180px;
grid-template-columns: repeat(4, 1fr);
column-gap: 22px;
row-gap: 31px;

@media (max-width: 956px) {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 745px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 473px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

