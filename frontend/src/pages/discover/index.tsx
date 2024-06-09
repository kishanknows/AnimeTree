import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {DiscoverScreenProps} from '../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {useEffect} from 'react';
import {getAnimeGenre} from '../../redux/slices/animeGenreSlice';
import {Header} from '../../components';
import {ICONS} from '../../assets';

interface GenreProps {
  title: string;
  onPress: () => void;
}

function Genre(props: GenreProps): React.JSX.Element {
  const dimensions = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: dimensions.height / 6,
        width: dimensions.width / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E293B',
        borderColor: 'black',
        borderWidth: 1,
        // margin: 8,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function DiscoverScreen(props: DiscoverScreenProps): React.JSX.Element {
  const animeGenre = useSelector((state: RootState) => state.genre.results);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimeGenre('genres'));
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#0F172A', flex: 1}}>
      <Header title="Discover" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {animeGenre.map((item, index) => (
            <Genre key={index} title={item.name} onPress={() => {}} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DiscoverScreen;
