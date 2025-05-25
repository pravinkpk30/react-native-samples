import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const DashboardScreen: React.FC = () => {
  return (
    <View style={tw`bg-slate-900 flex-1`}>
      <View style={tw`justify-center items-center flex-1`}>
        <Text style={tw`text-white text-2xl`}>
          Welcome to the Dashboard!
        </Text>
      </View>
    </View>
  );
};

export default DashboardScreen;
