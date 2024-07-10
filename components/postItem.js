import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const PostItem = ({post}) => {
  return (
    <View style={styles.post}>
      <Image source={{uri: post?.contained}} style={styles.image} />
      <View style={{flexDirection: 'row', marginTop: 7}}>
        <Image source={{uri: post?.profile}} style={styles.profileImage} />
        <Text style={styles.handle}>{post?.handle}</Text>
      </View>
      <Text style={styles.title}>{post?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    margin: 6,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 14,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  handle: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 2,
  },
});

export default PostItem;
