import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { ButtonView, ButtonText } from './style';

export default class Button extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
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
    const { onPress, text } = this.props;
    const { isPressed } = this.state;
    return (
      <TouchableWithoutFeedback onPress={onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut} >
        <ButtonView  isPressed={isPressed}>
          <ButtonText isPressed={isPressed}>
            {text}
          </ButtonText>
        </ButtonView>
      </TouchableWithoutFeedback>
    );
  }
}
