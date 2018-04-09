import styled from 'styled-components/native';

export const ButtonView = styled.View`
  background-color: ${p => p.isPressed ? 'white' : 'red'};
  padding: 10px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${p => p.isPressed ? 'red' : 'white'};
`;