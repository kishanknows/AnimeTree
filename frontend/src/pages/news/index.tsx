import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NewsScreenProps} from '../../navigation/types';
import {Header} from '../../components';
import {getAnimeNews, News} from '../../redux/slices/animeNewsSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

interface ItemProps {
  item: News;
  onPress: () => void;
}

function Item(props: ItemProps): React.JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPress} style={{flexDirection: 'row'}}>
      <View style={{margin: 8}}>
        <Image
          source={{uri: props.item.thumbnail}}
          style={{height: 100, width: 100, margin: 4}}
        />
        <Text style={{color: 'white', margin: 4}}>{props.item.timePosted}</Text>
      </View>
      <View style={{margin: 8, flexShrink: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            flexShrink: 1,
            margin: 4,
          }}>
          {props.item.headline}
        </Text>
        <Text style={{color: 'white', margin: 4}}>{props.item.hook}</Text>
        <Text style={{color: 'white', margin: 4}}>{props.item.full}</Text>
      </View>
    </TouchableOpacity>
  );
}

function NewsScreen(props: NewsScreenProps): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const newsList = useSelector((state: RootState) => state.news.data);

  useEffect(() => {
    dispatch(getAnimeNews());
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#0F172A', flex: 1}}>
      <Header title="News" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {newsList.map((item, index) => (
          <Item item={item} key={index} onPress={() => {}} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewsScreen;
