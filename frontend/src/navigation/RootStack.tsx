import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import DetailScreen from '../pages/details';

export type RootStackParamList = {
  MainTab: undefined;
  Details: {id: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
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

export default RootStack;
