import React, { useState, useEffect } from "react";
import api from "./services/api";

import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from "react-native";
import Repository from "./components/Repository";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const { data } = await api.get("/repositories");
        setRepositories(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadRepositories();
  }, [repositories]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        {
          repositories.map((repository) => (
            <Repository key={repository.id} repository={repository} />
          ))
        }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});
