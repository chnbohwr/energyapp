import React from 'react';
import PropTypes from 'prop-types';
import { RangeCardView, Slider, Title, Des, DesText } from './style';

export default class RangeCard extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    })).isRequired,
    defaultValue: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
  }
  render() {
    const { items, defaultValue, onSelect } = this.props;
    return (
      <RangeCardView>
        <Title>KVA</Title>
        <Des>
          <DesText>0</DesText>
          <DesText>1</DesText>
          <DesText>2</DesText>
          <DesText>3</DesText>
          <DesText>4</DesText>
          <DesText>5</DesText>
        </Des>
        <Slider
          maximumValue={5}
          minimumValue={0}
          value={1}
          step={1}
          thumbTintColor="red"
          maximumTrackTintColor="#777"
          minimumTrackTintColor="red"
        />
      </RangeCardView>
    );
  }
}