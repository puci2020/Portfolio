import React from 'react';
import {FormRow, FormWrapper} from "./ContactFormStyles";
import Button from "../../styles/GlobalComponents/Button";
import Input from "../../styles/GlobalComponents/Input";
import {InputBack, Textarea} from "../../styles/GlobalComponents";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .required('E-mail is required')
    .email('The email you entered is incorrect'),
  message: yup
    .string()
    .required('Message is required')
});

const ConcactForm = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver: yupResolver(schema)});

  const sendMessage = async (data) => {
    try{
      console.log(data)
      reset();
    }catch (err){
      console.log(err)
    }
  }

  return(
    <FormWrapper key={1} onSubmit={handleSubmit(sendMessage)}>
      <FormRow>
        <Input type="text" placeholder="First name" error={errors.firstName?.message} hookForm={register('firstName')}/>
        <Input type="text" placeholder="Last name" error={errors.lastName?.message} hookForm={register('lastName')}/>
      </FormRow>
      <Input type="email" placeholder="Email" error={errors.email?.message} hookForm={register('email')}/>
      <Input type="textarea" placeholder="Message" error={errors.message?.message} hookForm={register('message')}/>
      {/*<Textarea placeholder="Message" rows="10" error="asd"/>*/}
      <Button type="submit" alt="true">Send</Button>
      {/*<button type="submit" >Send</button>*/}
    </FormWrapper>

  )
}


export default ConcactForm;
