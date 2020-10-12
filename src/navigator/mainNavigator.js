import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012112Navigator from '../features/BlankScreen012112/navigator';
import BlankScreen112111Navigator from '../features/BlankScreen112111/navigator';
import BlankScreen112106Navigator from '../features/BlankScreen112106/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012112: { screen: BlankScreen012112Navigator },
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
