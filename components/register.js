import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PickBazarImage from '../assets/pickbazar.png';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    // handle registration logic here
  };

  return (
    <View className="mt-8 px-8">
      <Image
        className=" rounded-lg mt-8 mx-auto"
        source={PickBazarImage}
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold text-center text-black dark:text-white">
        Register
      </Text>

      {/* Registration Form */}
      <View className="mt-8 w-full px-4">
        <TextInput
          className="h-12 px-4 rounded-lg border border-gray-400 mb-4"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="h-12 px-4 rounded-lg border border-gray-400 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          className="h-12 px-4 rounded-lg border border-gray-400 mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-blue-500 py-2 px-8 rounded-lg"
          onPress={handleRegister}>
          <Text className="text-white text-lg font-bold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
