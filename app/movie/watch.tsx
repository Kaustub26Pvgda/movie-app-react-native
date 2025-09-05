import React from 'react';
import { View, Text } from 'react-native';

const WatchMovie = () => {
  return (
    <View className="flex-1 bg-primary justify-center items-center px-4">
      <View className="w-full max-w-xl h-64 bg-dark-100 rounded-xl justify-center items-center shadow-lg">
        <Text className="text-white text-2xl font-bold">Movie Player</Text>
        {/* Video player will go here in the future */}
      </View>
    </View>
  );
};

export default WatchMovie;