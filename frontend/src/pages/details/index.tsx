import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {useEffect, useState} from 'react';
import {getAnimeDetails} from '../../redux/slices/animeDetailSlice';
import {DetailScreenProps} from '../../navigation/types';

function DetailScreen(props: DetailScreenProps): React.JSX.Element {
  const anime = useSelector((state: RootState) => state.details.data);
  const [height, setHeight] = useState<number>();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimeDetails(props.route.params.id));
    Image.getSize(anime.img_url, (width, height) => setHeight(height));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: anime.img_url}}
            style={{width: '100%', height: height}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{anime.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Rated: {anime.rating}</Text>
          <Pressable
            onPress={() => {
              Linking.openURL(anime.trailer_url);
            }}>
            <Text style={{color: 'blue'}}>trailer</Text>
          </Pressable>
        </View>
        <Text>Score: {anime.score}</Text>
        <Text>Background: {anime.synopsis}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  imageContainer: {flexDirection: 'column', padding: 4},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
