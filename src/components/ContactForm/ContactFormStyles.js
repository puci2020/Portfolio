import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const FormRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 0;
  }
`;
