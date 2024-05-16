import React from 'react'
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/register/operations';
import { useForm } from 'react-hook-form';
import { StyleForm, StyleFormContainer, StyleFormInput, StyleFormLabel, StyleFormQuestion, StyleRadio, StyleFormTitle, StyleRegisterBtn, StyleRegisterContainer } from './RegistrationForm.styled';

export const RegistrationForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const submit = data => {
    dispatch(registerThunk(data));
    reset();
    };
  return (
    <StyleRegisterContainer>
        <StyleFormContainer>
            <StyleFormTitle>Event registration</StyleFormTitle>
            <StyleForm  onSubmit={handleSubmit(submit)}>
                <StyleFormInput type="text" name='name' {...register('name')}  id="name"
                    placeholder="Full name"/>
                <StyleFormInput type="text" name='email' {...register('email')} id="email"
                     placeholder="Email"/>
                <StyleFormInput type="text" name='datetime-local' {...register('date')} id="date"
                    placeholder="Date of birth"/>
            </StyleForm>
            <StyleFormQuestion>Where did you hear about this event?</StyleFormQuestion>
            <StyleRadio>
                <StyleFormLabel htmlFor="social"><input type='radio' id="social" name="answer" value="social media" defaultChecked></input>Social media</StyleFormLabel>
                <StyleFormLabel htmlFor="friends"><input type='radio' id="friends" name="answer" value="friends"></input>Friends</StyleFormLabel>
                <StyleFormLabel htmlFor="found"><input type='radio' id="found" name="answer" value="found myself"></input>Found myself</StyleFormLabel>
            </StyleRadio>
        
            <StyleRegisterBtn type='submit'>Registration</StyleRegisterBtn>
        </StyleFormContainer>
    </StyleRegisterContainer>
  )
}
