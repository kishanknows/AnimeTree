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
import {Header} from '../../components';

function DetailScreen(props: DetailScreenProps): React.JSX.Element {
  const anime = useSelector((state: RootState) => state.details.data);
  const [height, setHeight] = useState<number>();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimeDetails(props.route.params.id));
    Image.getSize(anime.img_url, (width, height) => setHeight(height));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0F172A'}}>
      <Header
        title="Details"
        canGoBack={true}
        onBack={() => props.navigation.goBack()}
      />
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
          <Text style={{color: 'white'}}>Rated: {anime.rating}</Text>
          <Pressable
            onPress={() => {
              Linking.openURL(anime.trailer_url);
            }}>
            <Text style={{color: 'blue'}}>trailer</Text>
          </Pressable>
        </View>
        <Text style={{color: 'white'}}>Score: {anime.score}</Text>
        <Text style={{color: 'white'}}>Background: {anime.synopsis}</Text>
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
    color: 'white',
  },
});

export default DetailScreen;
