import React from 'react';
import PropTypes from 'prop-types';
import SnapSlider from 'react-native-snap-slider';
import { RangeCardView } from './style';

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
        <SnapSlider items={items} defaultItem={defaultValue} onSlidingComplete={onSelect} />
      </RangeCardView>
    );
  }
}