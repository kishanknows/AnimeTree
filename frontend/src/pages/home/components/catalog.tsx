import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Anime} from '../../../redux/slices/suggestionSlice';
import {useEffect} from 'react';
import {AppDispatch, RootState} from '../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {getTopAnime} from '../../../redux/slices/topAnimeSlice';
import {Filter} from '../../../../api';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../../navigation/types';

interface ItemProps {
  item: Anime;
  onPress: () => void;
}

interface CatalogProps {
  filter: Filter;
  title: string;
  navigation: HomeScreenNavigationProp;
}

function Item(props: ItemProps): React.JSX.Element {
  const dimensions = useWindowDimensions();
  return (
    <TouchableOpacity onPress={props.onPress} style={{margin: 4}}>
      <Image
        source={{uri: props.item.img_url}}
        style={{aspectRatio: 0.7, width: dimensions.width / 3}}
      />
      <Text style={{width: dimensions.width / 3}}>{props.item.title}</Text>
    </TouchableOpacity>
  );
}

export function Catalog(props: CatalogProps): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const topAnime = useSelector(
    (state: RootState) => state.recommendation.topAnime,
  );
  useEffect(() => {
    dispatch(getTopAnime(props.filter));
  }, []);
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <ScrollView horizontal={true}>
        {topAnime[props.filter].map((item, index) => (
          <Item
            key={index}
            item={item}
            onPress={() => props.navigation.navigate('Details', {id: item.id})}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
  },
});
