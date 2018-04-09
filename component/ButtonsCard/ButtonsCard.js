import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsCardView } from './style';
import TabButton from './components/TabButton';

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
        {
          items.map(data =>
            <TabButton
              text={data.label}
              key={data.id}
              onPress={() => this.props.onSelect(data)}
              isActive={data.isActive}
            />
          )
        }
      </ButtonsCardView>
    );
  }
}