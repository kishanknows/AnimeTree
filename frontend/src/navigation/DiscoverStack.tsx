import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../pages/discover';

export type DiscoverStackParamList = {
  Discover: undefined;
};

const Stack = createNativeStackNavigator<DiscoverStackParamList>();

function DiscoverStack(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default DiscoverStack;
