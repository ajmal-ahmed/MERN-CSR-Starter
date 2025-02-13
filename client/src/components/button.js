import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop*/
  background: ${(props) =>
    props.primary ? '#ff867c' : 'white'
  };
  color: ${(props) =>
    props.primary ? 'white' : 'palevioletred'
  };

  font-size: 14px;
    padding: 6px 12px;
    margin: 20px auto 10px;
    width: ${props => props.width ? props.width : "100px"};
    display: inline-block;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 3px;
`;

export default Button;