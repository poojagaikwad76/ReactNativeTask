import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TagItem from './tagItem';

const TagList = ({data, posts}) => {
  const renderItem = ({item}) => (
    <TagItem tag={item} posts={posts?.filter(p => p?.order === item?.order)} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item?.tag_tax?.toString()}
      ItemSeparatorComponent={() => <View style={styles.sectionDivider} />}
    />
  );
};

const styles = StyleSheet.create({
  sectionDivider: {
    height: 4, 
    backgroundColor: 'black',
  },
});

export default TagList;
