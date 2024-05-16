import styled from "styled-components";

export const StyleEventsListContainer = styled.div`
display: block;
width: 100%;
margin: 20px 20px;
`;

export const StyleEventsTitle = styled.p`
font-size: 30px;
font-weight: 500;
color: black;
`;

export const StyleEventsUl = styled.ul`
display: flex;
margin-top: 30px;
flex-wrap: wrap;
gap: 20px;
`;

export const StyleEventsLi = styled.li`
display: block;
width: 270px;
height: 180px;
border-radius: 10px;
background-color: rgb(211 211 211);
`;

export const StyleCard = styled.div`
display: block;
position:relative;
width: 100%;
height: 100%;
padding: 20px;
`;

export const StyleCardTitle = styled.p`
display: block;
margin-bottom: 10px;
font-size: 15px;
font-weight: 500;
color: rgb(206 22 130);
`;

export const StyleCardText = styled.p`
display: block;
font-size: 15px;
font-weight: 500;
`;

export const StyleRegisterBtn = styled.button`
font-size: 13px;
padding: 5px 10px 5px 10px;
background-color: rgb(206 22 130);
border: none;
border-radius: 10px;

&:hover {
background-color: #a10b63; 
}
`;

export const StyleViewBtn = styled.button`
font-size: 13px;
padding: 5px 10px 5px 10px;
background-color: rgb(206 22 130);
border: none;
border-radius: 10px;

&:hover {
background-color: #a10b63; 
}
`;

export const StyleBtnUl = styled.ul`
display: flex;
position: absolute;
top: 74%;
margin-top: auto;
flex-direction: row;
gap: 20px;
`;