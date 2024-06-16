import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from './HomeStack';
import {RouteProp} from '@react-navigation/native';
import {NewsStackParamList} from './NewsStack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './MainTab';
import {DiscoverStackParamList} from './DiscoverStack';
import {RootStackParamList} from './RootStack';

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
  RootStackParamList,
  'Details'
>;
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

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

type DiscoverScreenNavigationProp = NativeStackNavigationProp<
  DiscoverStackParamList,
  'Discover'
>;
type DiscoverScreenRouteProp = RouteProp<DiscoverStackParamList, 'Discover'>;
export type DiscoverScreenProps = {
  navigation: DiscoverScreenNavigationProp;
  route: DiscoverScreenRouteProp;
};

type DiscoverAnimeScreenNavigationProp = NativeStackNavigationProp<
  DiscoverStackParamList,
  'DiscoverAnime'
>;
type DiscoverAnimeScreenRouteProp = RouteProp<
  DiscoverStackParamList,
  'DiscoverAnime'
>;
export type DiscoverAnimeScreenProps = {
  navigation: DiscoverAnimeScreenNavigationProp;
  route: DiscoverAnimeScreenRouteProp;
};

export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
export type MainTabProps = {
  navigation: MainTabNavigationProp;
};
