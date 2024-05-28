import {TextInput, View} from 'react-native';

export interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

export function Search(props: SearchProps): React.JSX.Element {
  return (
    <View>
      <TextInput
        value={props.query}
        onChangeText={props.setQuery}
        placeholder="Search for an anime"
      />
    </View>
  );
}
