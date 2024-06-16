import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {Header} from '../../components';
import {ICONS} from '../../assets';
import {Anime} from '../../redux/slices/suggestionSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getTopAnime} from '../../redux/slices/topAnimeSlice';
import {useEffect} from 'react';
import {AppDispatch, RootState} from '../../redux/store';
import {Catalog} from './components';
import {HomeScreenProps} from '../../navigation/types';

interface RecommendationProps {
  data: Anime;
  onPress: () => void;
}

function Recommendation(props: RecommendationProps): React.JSX.Element {
  const dimensions = useWindowDimensions();

  return (
    <Pressable
      style={{flexDirection: 'column', backgroundColor: '#1E293B'}}
      onPress={props.onPress}>
      <View>
        <Image
          source={{uri: props.data.img_url}}
          style={{height: dimensions.height / 2, width: dimensions.width}}
        />
      </View>
      <View style={{padding: 8, flexShrink: 1, width: dimensions.width}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            flexShrink: 1,
            color: 'white',
          }}>
          {props.data.title}
        </Text>
        <Text style={{color: 'white'}}>{props.data.rating}</Text>
        <Text style={{color: 'white'}}>{props.data.score}</Text>
      </View>
    </Pressable>
  );
}

function HomeScreen(props: HomeScreenProps): React.JSX.Element {
  const topAiring = useSelector(
    (state: RootState) => state.recommendation.topAnime.airing,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAnime('airing'));
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <Header
        title="MyAnime"
        primaryIcon={{
          name: ICONS.profile,
          onPress: () => {},
        }}
        secondaryIcon={{
          name: ICONS.search,
          onPress: () => props.navigation.navigate('Search'),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          style={styles.container}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {topAiring.map((item, index) => (
            <Recommendation
              data={item}
              key={index}
              onPress={() =>
                //@ts-ignore
                props.navigation.navigate('Details', {id: item.id})
              }
            />
          ))}
        </ScrollView>
        <Catalog
          filter={'bypopularity'}
          title="Top Popular"
          navigation={props.navigation}
        />
        <Catalog
          filter={'upcoming'}
          title="Top Upcoming"
          navigation={props.navigation}
        />
        <Catalog
          filter={'favorite'}
          title="Top Favorite"
          navigation={props.navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
