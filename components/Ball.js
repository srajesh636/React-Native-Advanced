import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export const Ball = () => {
  const [position, setPosition] = useState(new Animated.ValueXY(0, 0));
  useEffect(() => {
    Animated.spring(position, {
      toValue: {
        x: 200,
        y: 90,
      },
    }).start();
  }, [position]);
  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 50,
  },
});
