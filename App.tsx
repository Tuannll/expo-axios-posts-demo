import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import { getPosts } from './src/services/postService';
import { Post } from './src/types/api';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    const loadPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPosts(controller.signal);
        if (active) {
          setPosts(data);
        }
      } catch (error) {
        if (active && !axios.isCancel(error)) {
          setError('Không thể tải bài viết. Kiểm tra kết nối rồi thử lại.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void loadPosts();
    return () => {
      active = false;
      controller.abort();
    };
  }, [reload]);

  if (loading) {
    return (
      <View style={styles.center} accessibilityRole="progressbar">
        <ActivityIndicator size="large" />
        <Text style={styles.status}>Đang tải bài viết...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text accessibilityRole="alert" style={styles.error}>{error}</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Thử tải lại bài viết"
          onPress={() => setReload((value) => value + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Thử lại</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={<Text style={styles.header}>Danh sách bài viết</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  status: { marginTop: 12, fontSize: 16 },
  error: { color: '#b42318', fontSize: 16, textAlign: 'center' },
  button: { backgroundColor: '#155eef', borderRadius: 8, marginTop: 16, paddingHorizontal: 20, paddingVertical: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  header: { fontSize: 20, fontWeight: '700', padding: 20, textAlign: 'center' },
  item: { backgroundColor: '#fff', borderBottomColor: '#ddd', borderBottomWidth: 1, padding: 16 },
  title: { color: '#182230', fontSize: 16, fontWeight: '600', marginBottom: 6 },
  body: { color: '#475467', fontSize: 14, lineHeight: 20 },
});
