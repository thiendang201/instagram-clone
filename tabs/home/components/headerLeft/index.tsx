import Logo from '@/assets/icons/logo.svg';
import Colors from '@/constants/Colors';
import { useColorScheme, StyleSheet } from 'react-native';
import { ListItem, Popover, YGroup, styled } from 'tamagui';

const HeaderLeft = () => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Popover placement='bottom'>
      <Popover.Trigger>
        <Logo color={Colors[colorScheme].text} />
      </Popover.Trigger>
      <PopoverContent>
        <YGroup>
          <YGroup.Item>
            <ListItem>Followings 2</ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem>Favorites 2</ListItem>
          </YGroup.Item>
        </YGroup>
      </PopoverContent>
    </Popover>
  );
};

const PopoverContent = styled(Popover.Content, {
  enterStyle: { y: '$0', opacity: 0, scale: 0.85 },
  exitStyle: { y: '$0', opacity: 0, scale: 0.85 },
  transformOrigin: 'top center',
  elevate: true,
  y: '$7',
  x: '$3',
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true
      }
    }
  ]
});

export default HeaderLeft;
