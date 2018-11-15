// @flow

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  navigateTo: (
    route: 'Login' | 'AddTransaction' | 'Dashboard' | 'Chart'
  ) => void;
  activeRoute: 'Login' | 'AddTransaction' | 'Dashboard' | 'Chart';
};

const NAVS = ['Login', 'Dashboard', 'AddTransaction', 'Chart'];
class NavBar extends React.Component<Props> {
  render() {
    let {activeRoute} = this.props;
    return (
      <View style={styles.container}>
        {NAVS.map((nav, index) => (
          <TabBar
            key={index}
            title={nav}
            isActive={activeRoute === nav}
            onPress={() => this.props.navigateTo(nav)}
          />
        ))}
      </View>
    );
  }
}

type ButtonProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

function TabBar(props: ButtonProps) {
  let {title, isActive, onPress} = props;
  let style = [styles.tab, isActive && styles.activeTab];
  return (
    <TouchableOpacity onPress={() => onPress()} style={style}>
      <Text numberOfLines={1}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#DEF',
  },
  tab: {
    flex: 1,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDF',
    borderTopWidth: 4,
  },
  activeTab: {
    backgroundColor: '#DFF',
    borderTopColor: '#AFD',
  },
});

export default NavBar;