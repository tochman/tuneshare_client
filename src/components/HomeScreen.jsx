import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const { posts } = useSelector(state => state)

  return (
    <View>
      <Text>hello</Text>
      <FlatList
        testID="list"
        data={posts}
        renderItem={({ item }) => <Text>{item.track_name}</Text>}
        keyExtractor={item => item.track_name}
      />
    </View>
  )
}

export default HomeScreen
