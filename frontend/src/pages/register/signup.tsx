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
import {signupApi} from '../../../api';
import {InputField} from './components';
import {SignupScreenProps} from '../../navigation/types';
import {createUser, User} from '../../redux/slices/userSlice';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';

function SignupScreen(props: SignupScreenProps): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dimensions = useWindowDimensions();
  const dispatch: AppDispatch = useDispatch();

  async function onSignup() {
    const response = await signupApi({
      email: email,
      password: password,
      username: username,
      role: 'user',
    });
    if (response) {
      console.log('signup successful');
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
      console.log('failed to sign up');
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
            title="Username"
            value={username}
            setValue={setUsername}
            placeholder="Enter your username"
            secureTextEntry={false}
          />
          <InputField
            title="Email"
            value={email}
            setValue={setEmail}
            placeholder="Enter your email"
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
            onPress={onSignup}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              SignUp
            </Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => props.navigation.navigate('Login')}
            style={{flexDirection: 'row', margin: 32, alignSelf: 'flex-end'}}>
            <Text style={{color: 'white'}}>Already have an account? </Text>
            <Text style={{color: '#2563EB', fontWeight: 'bold'}}>Login</Text>
          </Pressable>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignupScreen;
