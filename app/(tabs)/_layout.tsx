import { Tabs } from 'expo-router';
import { useColorScheme, StyleSheet } from 'react-native';
import HomeOutline from '@/assets/icons/home-outline.svg';
import HomeFill from '@/assets/icons/home-fill.svg';
import SearchOutline from '@/assets/icons/search-outline.svg';
import SearchFill from '@/assets/icons/search-fill.svg';
import StoryOutline from '@/assets/icons/story-outline.svg';
import StoryFill from '@/assets/icons/story-fill.svg';
import AddOutline from '@/assets/icons/add-outline.svg';
import AddFill from '@/assets/icons/add-fill.svg';
import Colors from '@/constants/Colors';
import withFocusedIcon from '@/HOCs/withFocusedIcon';
import HeaderLeft from '@/tabs/home/components/headerLeft';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'home'
};

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].icon,
        tabBarInactiveTintColor: Colors[colorScheme].icon,
        tabBarStyle: [tabBarStyle.default, tabBarStyle[colorScheme]]
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: (tabProps) => <HomeIcon {...tabProps} />,
          headerLeftContainerStyle: [
            headerLeftContainerStyle.default,
            headerLeftContainerStyle[colorScheme]
          ],
          headerLeft: HeaderLeft
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: '',
          tabBarIcon: (tabProps) => <SearchIcon {...tabProps} />
        }}
      />
      <Tabs.Screen
        name='add'
        options={{
          title: '',
          tabBarIcon: (tabProps) => <AddIcon {...tabProps} />
        }}
      />
      <Tabs.Screen
        name='story'
        options={{
          title: '',
          tabBarIcon: (tabProps) => <StoryIcon {...tabProps} />
        }}
      />
    </Tabs>
  );
}

const HomeIcon = withFocusedIcon(HomeFill, HomeOutline);
const SearchIcon = withFocusedIcon(SearchFill, SearchOutline);
const StoryIcon = withFocusedIcon(StoryFill, StoryOutline);
const AddIcon = withFocusedIcon(AddFill, AddOutline);

const tabBarStyle = StyleSheet.create({
  default: {
    elevation: 0,
    height: 56,
    paddingTop: 14
  },
  light: {
    backgroundColor: Colors.light.background
  },
  dark: {
    backgroundColor: Colors.dark.background
  }
});

const headerLeftContainerStyle = StyleSheet.create({
  default: {
    paddingLeft: 14
  },
  light: {
    backgroundColor: Colors.light.background
  },
  dark: {
    backgroundColor: Colors.dark.background
  }
});
