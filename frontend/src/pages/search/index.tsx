import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {ICONS} from '../../assets/icons';
import {Icon} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Anime, getSuggestions} from '../../redux/slices/suggestionSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {SearchScreenProps} from '../../navigation/types';

interface ItemProps {
  item: Anime;
  onPress: () => void;
}

function Item(props: ItemProps): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.item} onPress={props.onPress}>
      <View style={{margin: 8}}>
        <Image
          source={{uri: props.item.img_url}}
          style={{height: 100, width: 100}}
        />
      </View>
      <View style={{margin: 8, flexWrap: 'wrap'}}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>
          {props.item.title}
        </Text>
        <Text style={{color: 'white'}}>{props.item.rating}</Text>
        <Text style={{color: 'white'}}>{props.item.score}</Text>
      </View>
    </TouchableOpacity>
  );
}

function SearchScreen(props: SearchScreenProps): React.JSX.Element {
  const [query, setQuery] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const suggestions = useSelector(
    (state: RootState) => state.suggestions.results,
  );

  useEffect(() => {
    dispatch(getSuggestions(query));
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
            style={{color: 'white'}}
            placeholderTextColor={'grey'}
          />
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        {suggestions.map((item, index) => (
          <Item
            key={index}
            item={item}
            //@ts-ignore
            onPress={() => props.navigation.navigate('Details', {id: item.id})}
          />
        ))}
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
    flexDirection: 'row',
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 8,
    margin: 4,
    padding: 8,
    flex: 1,
    borderColor: 'white',
  },
  text: {color: 'black', fontWeight: 'bold', fontSize: 12},
  item: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    margin: 2,
    borderRadius: 4,
  },
});

export default SearchScreen;
