import React from 'react';
import styled from 'styled-components'
import {ErrorSpan, InputBack, InputFront, InputWrapper, Textarea} from "./index";

const Input = (props) =>
  <>
    {props.type === 'textarea' ? (
      <InputWrapper>
        <Textarea placeholder={props.placeholder} rows="10" nChange={props.onChange} value={props.value}
                  error={props.error}  {...props.hookForm}/>
        {props.error ? <ErrorSpan>{props.error}</ErrorSpan> : ''}
      </InputWrapper>
    ) : (
      <InputWrapper>
        <InputBack alt="true" error={props.error}>

          <InputFront placeholder={props.placeholder} type={props.type} onChange={props.onChange}
                      value={props.value} {...props.hookForm}/>


        </InputBack>
        {props.error ? <ErrorSpan>{props.error}</ErrorSpan> : ''}
      </InputWrapper>
    )}
  </>

export default Input;
