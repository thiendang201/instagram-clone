import { SvgProps } from 'react-native-svg';

interface TabIconProps {
  focused: boolean;
}

const withFocusedIcon = (
  FocusedIcon: React.FC<SvgProps>,
  Icon: React.FC<SvgProps>
) => {
  return ({ focused, ...props }: TabIconProps & SvgProps) =>
    focused ? <FocusedIcon {...props} /> : <Icon {...props} />;
};

export default withFocusedIcon;
