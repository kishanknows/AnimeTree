import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {persistor, RootState, store} from './src/redux/store';
import RootStack from './src/navigation/RootStack';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
