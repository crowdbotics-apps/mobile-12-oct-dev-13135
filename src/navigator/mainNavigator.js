import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen112124Navigator from '../features/BlankScreen112124/navigator';
import BlankScreen012122Navigator from '../features/BlankScreen012122/navigator';
import BlankScreen012121Navigator from '../features/BlankScreen012121/navigator';
import BlankScreen112120Navigator from '../features/BlankScreen112120/navigator';
import BlankScreen112119Navigator from '../features/BlankScreen112119/navigator';
import BlankScreen112111Navigator from '../features/BlankScreen112111/navigator';
import BlankScreen112106Navigator from '../features/BlankScreen112106/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen112124: { screen: BlankScreen112124Navigator },
BlankScreen012122: { screen: BlankScreen012122Navigator },
BlankScreen012121: { screen: BlankScreen012121Navigator },
BlankScreen112120: { screen: BlankScreen112120Navigator },
BlankScreen112119: { screen: BlankScreen112119Navigator },
BlankScreen112111: { screen: BlankScreen112111Navigator },
BlankScreen112106: { screen: BlankScreen112106Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
