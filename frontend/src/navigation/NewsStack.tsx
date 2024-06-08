import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsScreen from '../pages/news';

export type NewsStackParamList = {
  News: undefined;
};

const Stack = createNativeStackNavigator<NewsStackParamList>();

function NewsStack(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}

export default NewsStack;
