import React from 'react';
import { EnergiaView, Title, SubTitle } from './style';
import InfoCard from '../../component/InfoCard';
import RangeCard from '../../component/RangeCard';
import { Icons } from 'react-native-fontawesome';

export default class EnergiaSolar extends React.Component {
  state = {
    rangeItem: [
      { value: 0, label: '0' },
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
    ],
    currentRangeValue: 0,
  }

  rangeChange = (item) => {
    console.log(item);
    // this.setState({ currentRangeValue: item.value });
  }

  render() {
    const { rangeItem, currentRangeValue } = this.state;
    return (
      <EnergiaView>
        <Title>Energia Solar</Title>
        <SubTitle>Location</SubTitle>
        <InfoCard
          title="Lisboa"
          des="Run Joaquim Carvalho Luis"
          icon={Icons.locationArrow} />
        <SubTitle>Location</SubTitle>
        <RangeCard
          items={rangeItem}
          defaultValue={currentRangeValue}
          onSelect={this.rangeChange}
        />
      </EnergiaView>
    );
  }
}