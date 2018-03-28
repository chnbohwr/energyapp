import React from 'react';
import { EnergiaView, Title, SubTitle } from './style';
import InfoCard from '../../component/InfoCard';
import { Icons } from 'react-native-fontawesome';

export default class EnergiaSolar extends React.Component {
  render() {
    return (
      <EnergiaView>
        <Title>Energia Solar</Title>
        <SubTitle>Location</SubTitle>
        <InfoCard
          title="Lisboa"
          des="Run Joaquim Carvalho Luis"
          icon={Icons.angleDoubleUp} />
      </EnergiaView>
    );
  }
}