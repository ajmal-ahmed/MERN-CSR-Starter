import styled from "styled-components";

const TextField = styled.input`
  padding: 0.5em;
  margin: 0.5em auto;
  height:2em;
  color: ${props => props.inputColor || "palevioletred"};
  width: ${props => props.fullwidth ? "100%" : "250px"};
  
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
export default TextField