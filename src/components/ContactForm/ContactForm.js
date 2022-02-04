import React from 'react';
import {FormRow, FormWrapper} from "./ContactFormStyles";
import Button from "../../styles/GlobalComponents/Button";
import Input from "../../styles/GlobalComponents/Input";
import {InputBack, Textarea} from "../../styles/GlobalComponents";


const ConcactForm = () =>
  <FormWrapper>
    <FormRow>
      <Input type="text" placeholder="First name" error/>
      <Input type="text" placeholder="Last name"/>
    </FormRow>
    <Input type="email" placeholder="Email"/>
    <Textarea placeholder="Message" rows="10" error/>
    <Button alt="true">Send</Button>
  </FormWrapper>


export default ConcactForm;
