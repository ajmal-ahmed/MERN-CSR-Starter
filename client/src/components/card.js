import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
overflow: hidden;
padding: 10px 10px 32px;
margin: 48px auto 0;
width: ${props => props.width ? props.width : "auto"};
max-width: ${props => props.fullWidth ? props.fullWidth : "400px"};
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 5px;
  color: ${props => props.color};
`;

const Content = styled.div`
  align-self: center;
  width:auto;
`;

const Card = ({ children, color = '#ff867c' }) => (
  <Container color={color}>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Card;