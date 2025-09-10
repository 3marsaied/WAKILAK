import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import "../global.css";

export default function IndexRedirect() {
  const router = useRouter();

//   useEffect(() => {
//     // Replace the root index with login so app starts on login screen
//     router.replace('/login');
//   }, []);

  return (
    <View className='flex-1 items-center bg-gray-800'>
      <Text className='p-20 text-6xl font-bold text-white'>WAKILAK</Text>
      
    </View>
  );
}
