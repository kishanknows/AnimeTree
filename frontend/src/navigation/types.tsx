import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from './HomeStack';
import {RouteProp} from '@react-navigation/native';
import {NewsStackParamList} from './NewsStack';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

type SearchScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Search'
>;
type SearchScreenRouteProp = RouteProp<HomeStackParamList, 'Search'>;
export type SearchScreenProps = {
  navigation: SearchScreenNavigationProp;
  route: SearchScreenRouteProp;
};

type DetailScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Details'
>;
type DetailScreenRouteProp = RouteProp<HomeStackParamList, 'Details'>;
export type DetailScreenProps = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};

type NewsScreenNavigationProp = NativeStackNavigationProp<
  NewsStackParamList,
  'News'
>;
type NewsScreenRouteProp = RouteProp<NewsStackParamList, 'News'>;
export type NewsScreenProps = {
  navigation: NewsScreenNavigationProp;
  route: NewsScreenRouteProp;
};
