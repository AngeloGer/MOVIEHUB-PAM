import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator, createBottomTabScreen } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@react-native-vector-icons/feather';
import { Home, Movies, MovieCreate } from '../screens';

export const MainTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: '#0093a6',
    tabBarInactiveTintColor: '#6b6a6a',
    tabBarStyle: {
      backgroundColor: '#fff',
      borderTopWidth: 0,
    },
    
  },
  screens: {
    Home: createBottomTabScreen({
      screen: Home,
      options: {
        title: 'Home',
        tabBarIcon: ({color, size}) => (
          <Feather name="home" color={color} size={size} />
        ),
      },
    }),
    Movies: createBottomTabScreen({
      screen: Movies,
      options: {
        title: 'Movies',
        tabBarIcon: ({color, size}) => (
          <Feather name="film" color={color} size={size} />
        ),
      }, 
    }),
  },
});

const MovieStack = createNativeStackNavigator({
  screens: {
    MainTabs: {
      screen: MainTabs,
      options: {
        headerShown: false,
      },
    },
    MovieCreate: {
      screen: MovieCreate,
      options: {
        headerTitle: 'Novo Filme',
      },
    },
  },
});

export const Navigation = createStaticNavigation(MovieStack);