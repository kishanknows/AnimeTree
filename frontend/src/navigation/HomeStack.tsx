import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';
import SearchScreen from '../pages/search';
import DetailScreen from '../pages/details';

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Details: {id: number};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
