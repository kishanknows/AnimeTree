import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';

export type RootStackParamList = {
  MainTab: undefined;
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
    </Stack.Navigator>
  );
}

export default RootStack;
