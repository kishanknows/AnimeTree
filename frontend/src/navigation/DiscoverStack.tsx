import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../pages/discover';
import {Genre} from '../redux/slices/animeGenreSlice';
import DiscoverAnimeScreen from '../pages/discover/discoverAnime';

export type DiscoverStackParamList = {
  Discover: undefined;
  DiscoverAnime: Genre;
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
      <Stack.Screen
        name="DiscoverAnime"
        component={DiscoverAnimeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default DiscoverStack;
