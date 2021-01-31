import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../styles/styles'
import TrackPlayer from './TrackPlayer'
import { Octicons } from '@expo/vector-icons';
import LikeService from "../modules/LikeService";

const PostIndex = ({ post }) => {
  let credentials = {
    uid: 'test@test.com'
  }
  return (
    <View style={styles.card_container}>
      <Card>
        <Card.Title style={styles.track}>{post.track}</Card.Title>
        <Card.Title style={styles.artists}>{post.artists}</Card.Title>
        <Card.Divider />
        <Card.Image style={styles.image} source={{ uri: post.image }}>
          <TrackPlayer post={post} />
        </Card.Image>
        <Card.Divider />
        <Text style={styles.description}>{post.description}</Text>
        <Octicons
          name="flame"
          size={24}
          color="black"
          testID={`likeButton-${post.id}`}
          onPress={() => LikeService.create(post.id, credentials)}
        >
          <Text testID={`likeCount-${post.id}`}>{post.likes}</Text>
        </Octicons>
      </Card>
    </View>
  )
}

export default PostIndex