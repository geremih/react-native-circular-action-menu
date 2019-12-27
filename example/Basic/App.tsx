/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';


declare var global: { HermesInternal: null | {} };

const App = () => {

  const [active, setActive] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
          {/*Rest of App come ABOVE the action button component!*/}
          <ActionButton buttonColor="rgba(231,76,60,1)" bgColor='rgba(0,0,0,0.4)' style={ACTION_BUTTON_STYLE} position='right'>
            <ActionButton.Item active={active} activeStyle={ACTION_BUTTON_ITEM_STYLE} buttonColor='#9b59b6' title="New Task" onPress={() => {
              setActive(!active)
              console.log('Active ' + active)
            }}>
              {active ? <Icon name="ios-close-circle-outline" style={styles.actionButtonIcon} /> : <Icon name="md-create" style={styles.actionButtonIcon} />}

            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
              <Icon name="md-notifications-outline" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
              <Icon name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </SafeAreaView>
    </>
  );
};

const ACTION_BUTTON_STYLE: ViewStyle = {
  borderColor: 'white',
  borderWidth: 1
}

const ACTION_BUTTON_ITEM_STYLE: ViewStyle = {
  borderColor: 'white',
  borderWidth: 1,
  backgroundColor: 'red'
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default App;
