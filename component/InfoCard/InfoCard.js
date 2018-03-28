import React from 'react';
import { CardContainer, CardTitle, CardDes, InfoCardView, CardBadge } from './style';
import FontAwesome from 'react-native-fontawesome';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  qqq:{
    color: 'red',
    width: 50,
    fontSize: 30,
    lineHeight: 40,
    textAlign: 'center'
  }
})
export default class InfoCard extends React.Component {
  render() {
    return (
      <InfoCardView>
        <CardBadge></CardBadge>
        <CardContainer>
          <CardTitle>{this.props.title}</CardTitle>
          <CardDes>{this.props.des}</CardDes>
        </CardContainer>
        <FontAwesome style={styles.qqq}>{this.props.icon}</FontAwesome>
      </InfoCardView>
    );
  }
}