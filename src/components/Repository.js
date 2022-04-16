import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import api from '../services/api';

export default function Repository(props) {
  const { id, title, techs, likes } = props.repository

  async function handleLikeRepository(id) {
    await api.post(`/repositories/${id}/like`)
  }

  return (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>{title}</Text>

      <View style={styles.techsContainer}>
        {
          techs.map((tech) => (
            <Text key={tech} style={styles.tech}>
              {tech}
            </Text>
          ))
        }
      </View>

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          testID={`repository-likes-${id}`}
        >
          {`${likes} curtidas`}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLikeRepository(id)}
        testID={`like-button-${id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>
    </View>
  )
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
