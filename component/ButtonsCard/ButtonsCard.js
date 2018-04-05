import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsCardView } from './style';

export default class ButtonsCard extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    onSelect: PropTypes.func,
  }
  render() {
    const { items } = this.props;
    return (
      <ButtonsCardView>
        
      </ButtonsCardView>
    );
  }
}