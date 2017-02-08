import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text
} from 'react-native';

export default class ActionButtonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipWidth: 0
    };
    this.onLayout = this.onLayout.bind(this);
  }
  onLayout(event) {
    this.setState({ tooltipWidth: event.nativeEvent.layout.width });
  }
  render() {
    const offsetX = this.props.radius * Math.cos(this.props.angle);
    const offsetY = this.props.radius * Math.sin(this.props.angle);
    const tooltipStyles = {
      leftToolTip: {
        position: 'absolute',
        color: 'white',
        minWidth: 80,
        maxHeight: 17,
        left: -this.state.tooltipWidth - 10,
        top: 10,
        textAlign: 'right'
      },
      middleToolTip: {
        color: 'white',
        position: 'absolute',
        minWidth: 80,
        maxHeight: 17,
        top: -25,
        left: (-this.state.tooltipWidth / 4) - 2,
        alignSelf: 'center',
        textAlign: 'center'
      },
      rightToolTip: {
        color: 'white',
        position: 'absolute',
        minWidth: 80,
        maxHeight: 17,
        top: 10,
        left: 45
      }
    };
    return (
      <Animated.View
        style={[{
          opacity: this.props.anim,
          width: this.props.size,
          height: this.props.size,
          transform: [
            {
              translateY: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetY],
              }) },
            {
              translateX: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetX],
              }) },
            {
              rotate: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '720deg'],
              }) },
            {
              scale: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }) },
          ]
        }]}
      >
        {this.props.leftSide ?
          <Text onLayout={this.onLayout} style={tooltipStyles.leftToolTip}>
            {this.props.tooltip}
          </Text> :
          null
        }
        <TouchableOpacity style={{flex: 1}} activeOpacity={this.props.activeOpacity || 0.85} onPress={this.props.onPress}>
          <View
            style={[ styles.actionButton, {
              width: this.props.size,
              height: this.props.size,
              borderRadius: this.props.size / 2,
              backgroundColor: this.props.buttonColor
            }]}
          >
            {this.props.children}
          </View>
        </TouchableOpacity>
        {this.props.middle ?
          <Text onLayout={this.onLayout} style={tooltipStyles.middleToolTip}>
            {this.props.tooltip}
          </Text> :
          !this.props.leftSide ?
            <Text style={tooltipStyles.rightToolTip}>
              {this.props.tooltip}
            </Text> : null
        }
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
  middle: PropTypes.bool,
  leftSide: PropTypes.bool,
  tooltip: PropTypes.string
};

ActionButtonItem.defaultProps = {
  onPress: () => {},
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
  }
});
