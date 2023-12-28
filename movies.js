import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import pic from "./assets/avengers.jpg";

export default function Movies({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image style={styles.image} source={pic} />
        <View>
          <Text>Avengers: Endgame</Text>
          <Text>
            After the devastating events of Avengers: Infinity Wark the universe
            is in ruins due to the efforts of the Mad Titan, Thanos.
          </Text>
          <Text>Date Published: 2019-04-24</Text>
          <Text>Total Votes: 10954</Text>
          <Text>Average Rating: 8.3</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    height: 120,
    width: 110,
    marginLeft: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex",
    backgroundColor: "lightgrey",
  },
});
