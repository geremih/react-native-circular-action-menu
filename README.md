# react-native-circular-action-menu
Path-esque circular action menu inspired by [CircularFloatingActionMenu](https://github.com/oguzbilgener/CircularFloatingActionMenu).

![react-native-circular-action-menu demo](http://i.giphy.com/3o6Zt6hNHOd3kVx4aY.gif)

### Installation
```bash
npm i react-native-circular-action-menu --save
```

### Usage

First, require it from your app's JavaScript files with:
```bash
import ActionButton from 'react-native-circular-action-menu';
```

##### ActionButton
`ActionButton` component is the main component which wraps everything and provides a couple of props (see Config below).

##### ActionButton.Item
`ActionButton.Item` specifies an Action Button. You have to include at least 1 `ActionButton.Item`.


### Example
_The following Basic example can be found in `example/Basic`._

```js
import React, { Component, StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';


class App extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="android-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="android-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
```

This will create a floating Button in the bottom right corner with 3 action buttons.
Also this example uses `react-native-vector-icons` for the button Icons.

### FAB Example
```js
<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { console.log("hi")}}
/>
```


### Configuration

##### ActionButton:
| Property       | Type          | Default             | Description |
| -------------  |:-------------:|:------------:       | ----------- |
| active         | boolean       | false               | action buttons visible or not
| autoInactive   | boolean       | true                | Auto hide ActionButtons when ActionButton.Item is pressed.
| position       | string        |  "center"  | one of: `left` `center` and `right`
| radiua | number | 100 | radius of menu
| bgColor   | string        | "transparent"       | color of overlay when ActionButtons are visible
| buttonColor    | string        | "rgba(0,0,0,1)"     | background color of the +Button **(must be rgba value!)**
| buttonFontSize | number        | 24                  | + and x sizes
| btnOutRange    | string        | props.buttonColor   | button background color to animate to
| outRangeScale  | number        | 1                   | changes size of button during animation
| onPress        | function      | null                | fires, when ActionButton is tapped
| onLongPress    | function      | null                | fires, when ActionButton is long pressed
| onOverlayPress | function      | null                | fires, when Overlay is pressed
| icon           | Component     | +                   | Custom component for ActionButton Icon
| backdrop       | Component     | false               | Custom component for use as Backdrop (i.e. [BlurView](https://github.com/react-native-fellowship/react-native-blur#blur-view), [VibrancyView](https://github.com/react-native-fellowship/react-native-blur#vibrancy-view))
| degrees        | number        | 135                 | degrees to rotate icon

##### ActionButton.Item:
| Property      | Type          | Default             | Description |
| ------------- |:-------------:|:------------:       | ----------- |
| onPress       | func          | null                | **required** function, triggers when a button is tapped
| buttonColor   | string        | same as + button    | background color of the Button
