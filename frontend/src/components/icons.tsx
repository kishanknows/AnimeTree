import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export interface IconProps {
  name: ImageSourcePropType;
  onPress: () => void;
  isActive?: boolean;
  filledName?: ImageSourcePropType;
}

export function Icon(props: IconProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={props.isActive ? props.filledName : props.name}
          style={{
            height: 30,
            width: 30,
            tintColor: 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
});
