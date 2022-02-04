import React from 'react';
import styled from 'styled-components'
import {InputBack, InputFront} from "./index";

const Input = (props) =>
<InputBack alt="true" error={props.error}>
  <InputFront placeholder={props.placeholder} type={props.type} onChange={props.onChange} value={props.value}/>
</InputBack>

export default Input;
