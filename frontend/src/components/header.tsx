import {StyleSheet, Text, View} from 'react-native';
import {Icon, IconProps} from './icons';

export interface HeaderProps {
  title: string;
  primaryIcon?: IconProps;
  secondaryIcon?: IconProps;
  tertiaryIcon?: IconProps;
}

export function Header(props: HeaderProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.icons}>
        {props.primaryIcon && (
          <Icon
            name={props.primaryIcon.name}
            onPress={props.primaryIcon.onPress}
          />
        )}
        {props.secondaryIcon && (
          <Icon
            name={props.secondaryIcon.name}
            onPress={props.secondaryIcon.onPress}
          />
        )}
        {props.tertiaryIcon && (
          <Icon
            name={props.tertiaryIcon.name}
            onPress={props.tertiaryIcon.onPress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
});
