import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Search({ navigation }) {
  const [search, setSearch] = useState("");

  const handelSearch = () => {
    navigation.navigate("Movies", { search });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Search Your Movie Here...</Text>
        <TextInput
          style={styles.input}
          placeholder="Movie name you want to search"
          Text={search}
          onChangeText={(text) => setSearch(text)}
        />
        <View style={styles.botton}>
          <Button title="SEARCH MOVIE" color="green" onPress={handelSearch} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  botton: {
    marginTop: 10,
  },
});
