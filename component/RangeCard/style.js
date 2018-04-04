import styled from 'styled-components/native';

export const RangeCardView = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  padding: 10px 5px 20px 5px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #555;
  margin-left: 15px;
`;

export const Des = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  margin: 15px 0;
`;

export const DesText = styled.Text`
  font-size: 10px;
  color: #777;
`;

export const Slider = styled.Slider`
  width: 100%;
`;