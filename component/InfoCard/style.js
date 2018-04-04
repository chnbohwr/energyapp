import styled from 'styled-components/native';

export const InfoCardView = styled.View`
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    width: 100%;
    height: 42px;
    border: 1px solid #ccc;
    padding-left: 20px;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    /* box-shadow: 20px 0px 15px black; */
`;

export const CardBadge = styled.View`
    width: 3px;
    height: 100%;
    background: red;
    position: absolute;
    top: 0;
    left: 0;
`;

export const CardContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const CardTitle = styled.Text`
    font-size: 12px;
    color: #555;
`;

export const CardDes = styled.Text`
    font-size: 10px;
    color: #777;
`;
