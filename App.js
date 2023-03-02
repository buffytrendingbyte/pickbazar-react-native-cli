import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PickBazarImage from './assets/pickbazar.png';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="mt-8 px-8">
      {/*add an image*/}
      <Image
        className=" rounded-lg mt-8 mx-auto"
        source={PickBazarImage}
        resizeMode="contain"
      />

      <Text className="mt-2 text-lg text-center text-black dark:text-white">
        Login with your email and password
      </Text>

      {/* Login Form */}
      <View className="mt-8 w-full px-4">
        <TextInput
          className="h-12 px-4 rounded-lg border border-gray-400 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          className="h-12 px-4 rounded-lg border border-gray-400 mb-8"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-green-600 py-2 px-8 rounded-lg mb-4"
          onPress={handleLogin}>
          <Text className="text-white text-center text-lg font-bold">
            Login
          </Text>
        </TouchableOpacity>

        <Text className="text-center mb-4 text-xl">or</Text>

        <TouchableOpacity
          className="bg-blue-500 py-2 px-8 rounded-lg mb-4"
          onPress={handleGoogleSignIn}>
          <Text className="text-white text-center text-lg font-bold">
            Login with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-600 py-2 px-8 rounded-lg mb-4"
          onPress={handleGoogleSignIn}>
          <Text className="text-white text-center text-lg font-bold">
            Login with Mobile Number
          </Text>
        </TouchableOpacity>

        <Text className="mt-14 text-gray-500 text-center">
          Don't have any account?{' '}
          <Text className="underline text-blue-400">Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default App;
