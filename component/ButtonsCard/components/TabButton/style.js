import styled from 'styled-components/native';

export const ButtonView = styled.View`
  background-color: ${p => p.isActive ? 'red' : p.isPressed ? 'red' : 'white'};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 80px;
`;

export const ButtonText = styled.Text`
  color: ${p => p.isActive ? 'white' : p.isPressed ? 'white' : 'red'};
`;