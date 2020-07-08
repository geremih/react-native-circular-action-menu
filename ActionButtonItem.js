import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ActionButtonItem extends Component {

  render() {
    const {
      radius,
      angle,
      anim,
      size,
      startDegree,
      endDegree,
      activeOpacity,
      onPress,
      buttonColor,
      style,
      active,
      activeStyle,
      children,
      ...others
    } = this.props;
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);
    return (
      <Animated.View
        style={[{
          opacity: anim,
          width: size,
          height: size,
          transform: [
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetY],
              })
            },
            {
              translateX: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetX],
              })
            },
            {
              rotate: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [`${startDegree}deg`, `${endDegree}deg`],
              })
            },
            {
              scale: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              })
            },
          ]
        }]}
      >
        <TouchableOpacity
          {...others}
          style={{ flex: 1 }}
          activeOpacity={activeOpacity || 0.85}
          onPress={onPress}>
          <View
            style={[styles.actionButton, {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: buttonColor,
            },
              style,
            active ? activeStyle : undefined]}
          >
            {children}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

}

ActionButtonItem.propTypes = {
  angle: PropTypes.number,
  radius: PropTypes.number,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
  startDegree: PropTypes.number,
  endDegree: PropTypes.number,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  active: PropTypes.bool,
};

ActionButtonItem.defaultProps = {
  onPress: () => { },
  startDegree: 0,
  endDegree: 720,
  active: false,
};

const styles = StyleSheet.create({
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#444',
    shadowRadius: 1,
    backgroundColor: 'red',
    position: 'absolute',
  },
});
