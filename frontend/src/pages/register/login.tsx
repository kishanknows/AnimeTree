import {useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {IMAGE} from '../../assets/images';
import {loginApi} from '../../../api';
import {InputField} from './components';
import {LoginScreenProps} from '../../navigation/types';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {createUser, User} from '../../redux/slices/userSlice';

function LoginScreen(props: LoginScreenProps): React.JSX.Element {
  const [emailUsername, setEmailUsername] = useState('');
  const [password, setPassword] = useState('');
  const dimensions = useWindowDimensions();
  const dispatch: AppDispatch = useDispatch();

  async function onLogin() {
    const response = await loginApi({
      emailUsername: emailUsername,
      password: password,
    });
    if (response) {
      console.log('login successful');
      console.log(response);
      const user: User = {
        id: response.user.id,
        token: response.token,
        email: response.user.email,
        username: response.user.username,
      };
      dispatch(createUser(user));
      props.navigation.navigate('MainTab');
    } else {
      console.log('failed to log in');
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0F172A'}}>
      <ImageBackground
        source={IMAGE.background}
        imageStyle={{opacity: 0.2}}
        style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 8, alignItems: 'center'}}>
            <Image
              source={IMAGE.logo}
              style={{
                width: dimensions.width - 32,
                height: dimensions.height / 3,
              }}
              resizeMode="contain"
              tintColor={'white'}
            />
          </View>
          <InputField
            title="Email/Username"
            value={emailUsername}
            setValue={setEmailUsername}
            placeholder="Enter your email or username"
            secureTextEntry={false}
          />
          <InputField
            title="Password"
            value={password}
            setValue={setPassword}
            placeholder="Enter your Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{
              padding: 12,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2563EB',
              borderRadius: 8,
              marginTop: 32,
              marginHorizontal: 8,
            }}
            onPress={onLogin}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => props.navigation.navigate('Signup')}
            style={{flexDirection: 'row', margin: 32, alignSelf: 'flex-end'}}>
            <Text style={{color: 'white'}}>Don't have an account? </Text>
            <Text style={{color: '#2563EB', fontWeight: 'bold'}}>SignUp</Text>
          </Pressable>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LoginScreen;
