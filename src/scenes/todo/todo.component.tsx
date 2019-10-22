import React from 'react';
import {
  Divider,
  Tab,
  TabBar,
} from 'react-native-ui-kitten';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '@app-components/safe-area-layout.component';
import {
  Toolbar,
  ToolbarMenu,
} from '@app-components/toolbar.component';
import {
  DoneAllIcon,
  GridIcon,
  InfoIcon,
  LogoutIcon,
  MenuIcon,
} from '@app-assets/icons';
import { AppRoute } from '@app-navigation/app-routes';

// FIXME(REACT-NAVIGATION-5): props type definitions? (used in `todo.navigator.tsx`)
export const TodoScreen = (props): SafeAreaLayoutElement => {

  const [selectedIndex, setSelectedIndex] = React.useState<number>(props.state.index);

  const menu: ToolbarMenu = [
    { title: 'About', icon: InfoIcon },
    { title: 'Log Out', icon: LogoutIcon },
  ];

  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = menu;

    switch (selectedItem.title) {
      case 'Log Out':
        props.navigation.navigate(AppRoute.AUTH);
        break;
      default:
        props.navigation.navigate(selectedItem.title);
        break;
    }
  };

  const onTabSelect = (index: number): void => {
    const { [index]: selectedTabRoute } = props.state.routeNames;

    props.navigation.navigate(selectedTabRoute);
    setSelectedIndex(index);
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <Toolbar
        title='React Navigation Ex 🐱'
        onMenuItemSelect={onMenuItemSelect}
        menu={menu}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={onTabSelect}>
        <Tab
          icon={GridIcon}
          title='IN PROGRESS'
        />
        <Tab
          icon={DoneAllIcon}
          title='DONE'
        />
      </TabBar>
      <Divider/>
    </SafeAreaLayout>
  );
};
