import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header} from '../../components';
import {ICONS} from '../../assets';
import {HomeScreenProps} from '../../types';
import {Anime} from '../../redux/slices/suggestionSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getTopAnime} from '../../redux/slices/topAnimeSlice';
import {useEffect, useState} from 'react';
import {AppDispatch, RootState} from '../../redux/store';

interface RecommendationProps {
  data: Anime;
}

function Recommendation(props: RecommendationProps): React.JSX.Element {
  return (
    <View style={{flexDirection: 'column', padding: 16}}>
      <View>
        <Image
          source={{uri: props.data.img_url}}
          style={{height: 300, width: 300}}
        />
      </View>
      <View>
        <Text>{props.data.title}</Text>
        <Text>{props.data.rating}</Text>
        <Text>{props.data.score}</Text>
      </View>
    </View>
  );
}

function HomeScreen(props: HomeScreenProps): React.JSX.Element {
  const topAnime = useSelector(
    (state: RootState) => state.recommendation.topAnime,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAnime());
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <Header
        title="MyAnime"
        primaryIcon={{
          name: ICONS.search,
          onPress: () => props.navigation.navigate('Search'),
        }}
      />
      <ScrollView style={styles.container} horizontal={true}>
        {topAnime.map((item, index) => (
          <Recommendation data={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
