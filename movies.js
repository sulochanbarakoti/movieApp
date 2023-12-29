import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import pic from "./assets/avengers.jpg";
import { useState } from "react";
import { useEffect } from "react";

export default function Movies({ route }) {
  const { search } = route.params;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              query: search,
              include_adult: false,
              language: "en-US",
              page: 1,
              api_key: "ffef4db96f8a2c0d5d2da1000dea09c6",
            },
          }
        );
        setMovieData(response.data.results);
        const movies = response.data.results;

        // Log movie titles to the console
        movies.forEach((movie) => {
          console.log("Movie Title:", movie.title);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          {movieData && (
            <View>
              {movieData.map((movie, index) => (
                <View key={index} style={styles.searchContainer}>
                  <Image
                    key={index}
                    style={styles.image}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                    }}
                  />
                  <View style={styles.contain}>
                    <Text style={styles.title}>{movie.original_title}</Text>
                    <Text style={styles.description} numberOfLines={3}>
                      {movie.overview}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      Date Published: {movie.release_date}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      Total Votes: {movie.vote_count}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      Average Rating: {movie.vote_average}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
          {/* {movieData ? (
        <View>
          <Text>Data from API:</Text>
          <Text>{JSON.stringify(movieData.results)}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )} */}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    height: "auto",
    width: "30%",
    borderRadius: 5,
    margin: 10,
  },
  contain: {
    flex: 1,
    width: "70%",
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
  },
  title: {
    fontSize: 18,
    paddingTop: 5,
    fontWeight: "bold",
  },
  discription: {
    width: "auto",
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 5,
  },
});
