import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Search} from './components';
import {useState} from 'react';

function HomeScreen(): React.JSX.Element {
  const [query, setQuery] = useState('');
  return (
    <SafeAreaView style={styles.background}>
      <Text>Home</Text>
      <View style={styles.container}>
        <Search query={query} setQuery={setQuery} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default HomeScreen;
