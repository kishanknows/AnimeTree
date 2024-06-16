import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Header} from '../../components';
import {
  DiscoverAnimeType,
  getDiscoverAnime,
} from '../../redux/slices/discoverAnimeSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {DiscoverAnimeScreenProps} from '../../navigation/types';

interface ItemProps {
  item: DiscoverAnimeType;
  onPress: () => void;
}

function Item(props: ItemProps): React.JSX.Element {
  const dimensions = useWindowDimensions();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{padding: 4, width: dimensions.width / 2}}>
      <Image source={{uri: props.item.thumbnail}} style={{aspectRatio: 0.7}} />
      <Text style={{color: 'white', fontWeight: 'bold', margin: 4}}>
        {props.item.title}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={{color: 'white', margin: 4}}>{props.item.type}</Text>
        <Text style={{color: 'white', margin: 4}}>{props.item.aired}</Text>
        {/* <Text style={{color: 'white', margin: 4}}>{props.item.eps}</Text> */}
      </View>
      <Text style={{color: 'white', margin: 4}} numberOfLines={3}>
        {props.item.synopsis}
      </Text>
    </TouchableOpacity>
  );
}

function DiscoverAnimeScreen(
  props: DiscoverAnimeScreenProps,
): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const animeList = useSelector((state: RootState) => state.discover.results);
  useEffect(() => {
    dispatch(getDiscoverAnime(props.route.params.id));
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0F172A'}}>
      <Header
        title={props.route.params.name}
        canGoBack={true}
        onBack={() => props.navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {animeList.map((item, index) => (
            <Item
              item={item}
              key={index}
              onPress={() =>
                //@ts-ignore
                props.navigation.navigate('Details', {id: item.id})
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DiscoverAnimeScreen;
