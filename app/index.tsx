import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";

export default function IndexRedirect() {
  const router = useRouter();

//   useEffect(() => {
//     // Replace the root index with login so app starts on login screen
//     router.replace('/login');
//   }, []);

  return (
    <SafeAreaView className="flex-1 items-center bg-gray-900">
      <Text className="p-3 text-6xl font-bold text-white">WAKILAK</Text>
      <TouchableOpacity className="mt-4 rounded-full bg-white px-4 py-2 w-[300px] items-center" onPress={() => router.push('/login')}>
        <Text className="text-black text-2xl font-semibold">Let's Go</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
