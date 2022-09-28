import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import Lottie from 'lottie-react-native';

export default function ControllingAnimationProgress() {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  return (
     <Lottie
      source={require('./assets/loader1.json')}
      progress={animationProgress.current}
    />
  );
}