import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import NewsStack from './NewsStack';
import {View} from 'react-native';
import {MainTabNavigationProp, MainTabProps} from './types';
import {Icon} from '../components';
import {ICONS} from '../assets';
import {useState} from 'react';
import DiscoverStack from './DiscoverStack';

export type MainTabParamList = {
  HomeStack: undefined;
  DiscoverStack: undefined;
  NewsStack: undefined;
};

interface TabBarProps {
  navigation: MainTabNavigationProp;
}

const Tab = createBottomTabNavigator<MainTabParamList>();

function TabBar(props: TabBarProps): React.JSX.Element {
  const [id, setId] = useState(1);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#0F172A',
      }}>
      <Icon
        name={ICONS.home}
        isActive={id == 1}
        onPress={() => {
          setId(1);
          props.navigation.navigate('HomeStack');
        }}
        filledName={ICONS.homeFilled}
      />
      <Icon
        name={ICONS.discover}
        isActive={id == 2}
        onPress={() => {
          setId(2);
          props.navigation.navigate('DiscoverStack');
        }}
        filledName={ICONS.discoverFilled}
      />
      <Icon
        name={ICONS.news}
        isActive={id == 3}
        onPress={() => {
          setId(3);
          props.navigation.navigate('NewsStack');
        }}
        filledName={ICONS.newsFilled}
      />
    </View>
  );
}

function MainTab(props: MainTabProps): React.JSX.Element {
  return (
    <Tab.Navigator tabBar={() => <TabBar navigation={props.navigation} />}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="DiscoverStack"
        component={DiscoverStack}
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
