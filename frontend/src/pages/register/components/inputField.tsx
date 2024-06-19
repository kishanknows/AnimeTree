import {View, Text, TextInput} from 'react-native';

export interface InputFieldProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
}

export function InputField(props: InputFieldProps): React.JSX.Element {
  return (
    <View style={{margin: 8}}>
      <Text style={{color: 'white', fontWeight: 'bold', margin: 4}}>
        {props.title}
      </Text>
      <View
        style={{
          padding: 12,
          backgroundColor: '#1E293B',
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 8,
          margin: 4,
        }}>
        <TextInput
          value={props.value}
          onChangeText={props.setValue}
          placeholder={props.placeholder}
          style={{color: 'white'}}
          placeholderTextColor={'grey'}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
}
