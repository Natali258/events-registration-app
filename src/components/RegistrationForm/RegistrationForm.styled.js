import styled from "styled-components";

export const StyleRegisterContainer = styled.div`
display:block;
width:100%;
height:100%;
`;

export const StyleFormContainer = styled.div`
display:block;
padding: 20px;
margin: 70px auto;
width:400px;
border-radius: 10px;
background-color: rgb(211 211 211);
`;

export const StyleFormTitle = styled.p`
display: block;
margin-bottom: 10px;
font-size: 25px;
font-weight: 500;
color: rgb(206 22 130);
`;

export const StyleForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const StyleFormInput = styled.input`
padding: 10px;
outline: none;
border-radius: 5px;
border: 2px solid rgb(206 22 130);
background-color: rgb(211 211 211);
&:hover {
    border: 2px solid #a10b63; 
}
`;

export const StyleRegisterBtn = styled.button`
display: block;
margin: 0 auto;
font-size: 13px;
padding: 5px 10px 5px 10px;
background-color: rgb(206 22 130);
border: none;
border-radius: 10px;

&:hover {
background-color: #a10b63; 
}
`;

export const StyleFormQuestion = styled.p`
display: block;
margin: 30px 0 10px 0;
font-size: 15px;
font-weight: 500;
color: rgb(206 22 130);
`;

export const StyleRadio = styled.div`
display: flex;
margin-bottom: 15px;
gap: 20px;
`;

export const StyleFormLabel = styled.label`
display: flex;
gap: 5px;
`;
