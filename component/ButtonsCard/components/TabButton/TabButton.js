import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { ButtonView, ButtonText } from './style';

export default class TabButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  };

  state = {
    isPressed: false
  };

  handlePressIn = () => {
    this.setState({
      isPressed: true
    });
  }

  handlePressOut = () => {
    this.setState({
      isPressed: false
    });
  }

  render() {
    const { onPress, text, isActive } = this.props;
    const { isPressed } = this.state;
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut} >
        <ButtonView isActive={isActive} isPressed={isPressed}>
          <ButtonText isActive={isActive} isPressed={isPressed}>
            {text}
          </ButtonText>
        </ButtonView>
      </TouchableWithoutFeedback>
    );
  }
}
