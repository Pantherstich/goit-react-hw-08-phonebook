import styled from 'styled-components';

export const Div = styled.div`
  max-width: 480px;
  padding: 48px;
  margin: 16px auto;
  background-color: #e6e654dd;
  border-radius: 40px;
  box-shadow: 0 0 8px #000000;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const BtnLogout = styled.button`
  width: 160px;
  padding: 8px;
  background-color: #686868;
  border-radius: 30px;
  color: #e6e654;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #e6e654;
    color: #686868;
  }
`;
export const Container = styled.div`
  /* display: flex; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 428px) {
    flex-direction: column;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 16px;
  }
  @media (max-width: 428px) {
    flex-direction: row;
  }
`;
export const UserMail = styled.p`
  margin-right: 16px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-top: 5px;
  }

  @media (max-width: 428px) {
    margin-bottom: 5px;
  }
`;
