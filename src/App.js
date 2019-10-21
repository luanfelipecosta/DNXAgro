import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Scan from './screens/Scan';

// Router Module
/** Obs.1: I used the short syntax, passing the ScreenName as RouteKey
 *  the complete syntax would be something like this:
 *  Obs:2: I passed the navigation option as a static prop in the screen file.
 *
 *  (screens/MyComponent/index.js)
 *  MyComponent.navigationOptions = { ... }
 *
 * createStackNavigator({
 *  RouteKey: {
 *    Screen: ScreenComponent
 *    navigationOptions: (navigation) => ({ .... }),
 *  }
 * })
 *
 */
const Router = createStackNavigator({
  Login,
  Scan,
});

const AppNavigator = createAppContainer(Router);

export default AppNavigator;

console.disableYellowBox = true;
