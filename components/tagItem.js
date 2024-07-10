import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PostItem from './postItem';

const TagItem = ({tag, posts}) => {
  return (
    <View style={styles.tagSection}>
      <Text style={styles.tagTitle}>{tag?.tag_tax}</Text>
      <FlatList
        horizontal
        data={posts}
        renderItem={({item}) => <PostItem post={item} />}
        keyExtractor={postItem => postItem?.id?.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tagSection: {
    marginBottom: 20,
  },
  tagTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  divider: {
    width: 7,
  },
});

export default TagItem;
