import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
overflow: hidden;
padding: 10px;
margin: 0px auto 0;
width: auto;
min-height:50px;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 10px rgba(0, 0, 0, .05), 0 0px 10px rgba(0, 0, 0, .08);
border-radius: 5px;
  color: ${props => props.color};
`;

const Content = styled.div`
  align-self: center;
`;

const Toolbar = ({ children, color = '#ff867c' }) => (
    <Container color={color}>
        <Content>
            {children}
        </Content>
    </Container>
);

export default Toolbar;