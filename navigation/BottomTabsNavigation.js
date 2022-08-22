import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import HomeStack from './homeStack';
import SearchScreen from '../Screens/Restaurant/SearchScreen';
import SearchStack from './searchStack';
const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          tabBarBadge: 1,
          title: 'Home',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='SearchTab'
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='CategoryTab'
        component={CategoriesScreen}
        options={{
          title: 'Category',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name='microsoft-xbox-controller-menu'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='SettingsTab'
        component={SettingsScreen}
        options={{
          title: 'Country',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name='city' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
};
// const SearchScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// };
const CategoriesScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default BottomTabsNavigation;