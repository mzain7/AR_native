import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to AR Viewer</Text>
        <Text style={styles.description}>
          Explore interactive 3D models in augmented reality using Google Scene Viewer.
          Navigate to the Models tab to view our collection.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginBottom: 16,
    color: '#000',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
});