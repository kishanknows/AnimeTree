import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import DetailScreen from '../pages/details';
import LoginScreen from '../pages/register/login';
import SignupScreen from '../pages/register/signup';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export type RootStackParamList = {
  MainTab: undefined;
  Details: {id: number};
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): React.JSX.Element {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? 'MainTab' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
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
