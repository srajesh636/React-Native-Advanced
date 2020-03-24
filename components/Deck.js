import React, {Component} from 'react';
import {View, Animated} from 'react-native';

export const Deck = ({data, renderCard}) => {
  const renderCards = () => {
    return data.map(i => renderCard(i));
  };
  return <View>{renderCards()}</View>;
};
