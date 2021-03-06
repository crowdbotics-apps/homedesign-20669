import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings109556Navigator from '../features/Settings109556/navigator';
import UserProfile109549Navigator from '../features/UserProfile109549/navigator';
import Settings109548Navigator from '../features/Settings109548/navigator';
import Settings109546Navigator from '../features/Settings109546/navigator';
import SignIn2109544Navigator from '../features/SignIn2109544/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings109556: { screen: Settings109556Navigator },
UserProfile109549: { screen: UserProfile109549Navigator },
Settings109548: { screen: Settings109548Navigator },
Settings109546: { screen: Settings109546Navigator },
SignIn2109544: { screen: SignIn2109544Navigator },

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
