import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 30px;
  box-shadow: 0 0 8px #000000;
  background-color: #e6e654dd;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  min-width: 280px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  font-size: 24px;
  border-radius: 30px;
  font-weight: 700;
  background-color: #686868;
  color: #e6e654;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #e6e654;
    color: #686868;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  font-weight: 700;
  font-size: 24px;

  text-align: center;
  color: #002a58;
  text-decoration: none;
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
