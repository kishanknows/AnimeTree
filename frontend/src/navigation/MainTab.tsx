import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import NewsStack from './NewsStack';

export type MainTabParamList = {
  HomeStack: undefined;
  NewsStack: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab(): React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="NewsStack"
        component={NewsStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
