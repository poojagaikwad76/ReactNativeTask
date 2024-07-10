import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import TagList from './components/tagList';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url =
      'https://indovisionservices.in/info/dev/v15/hrms_api/v7/api/Testing/getData';
    const formData = new FormData();
    formData.append('key', '001');
    formData.append('user_id', 'EMP001');

    const headers = {
      'Content-Type': 'multipart/form-data',
      token: '1234567890',
    };

    try {
      const response = await axios.post(url, formData, {headers});
      setData(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TagList data={data?.meta} posts={data?.post} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231C1C',
    paddingHorizontal: 20,
  },
});

export default App;
