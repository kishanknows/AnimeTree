import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {ICONS} from '../../assets';
import {Icon} from '../../components';
import {SearchScreenProps} from '../../types';
import {searchApi} from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
import {Suggestion} from '../../redux/slices/suggestionSlice';
import {AppDispatch, RootState} from '../../redux/store';

interface ItemProps {
  item: Suggestion;
}

function Item(props: ItemProps): React.JSX.Element {
  return (
    <View style={styles.item}>
      <View style={{margin: 8}}>
        <Image
          source={{uri: props.item.img_url}}
          style={{height: 100, width: 100}}
        />
      </View>
      <View style={{margin: 8, flexWrap: 'wrap'}}>
        <Text style={{fontWeight: 'bold'}}>{props.item.title}</Text>
        <Text>{props.item.rating}</Text>
        <Text>{props.item.score}</Text>
      </View>
    </View>
  );
}

function SearchScreen(props: SearchScreenProps): React.JSX.Element {
  const [query, setQuery] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.suggestion);
  const [suggestions, setSuggestions] = useState(data);

  async function getSearchResults() {
    const response = await searchApi({query: query});
    const data = response?.data;
    const animeList: Suggestion[] = [];
    data.map(item => {
      animeList.push({
        title: item.title,
        trailer_url: item.trailer.url,
        img_url: item.images.jpg.image_url,
        genres: item.genres.map((genre: any) => genre.name),
        rating: item.rating,
        duration: item.duration,
        score: item.score,
      });
    });
    animeList && dispatch(setSuggestions(animeList));
  }

  useEffect(() => {
    getSearchResults();
  }, [query]);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Icon
          name={ICONS.back}
          onPress={() => props.navigation.navigate('Home')}
        />
        <View style={styles.textBox}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search for an anime"
          />
        </View>
      </View>
      {/* <History /> */}
      <ScrollView style={{flex: 1}}>
        {suggestions.map((item, index) => (
          <Item key={index} item={item} />
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
    flexDirection: 'row',
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 4,
    padding: 4,
    flex: 1,
  },
  text: {color: 'black', fontWeight: 'bold', fontSize: 12},
  item: {flexDirection: 'row'},
});

export default SearchScreen;
