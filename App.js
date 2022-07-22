import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`p-4 android:pt-2 bg-red-300 flex-row m-5`}>
      <Text style={tw`text-md tracking-wide text-white`}>Hey there!</Text>

    </View>
  );
}
