import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>About AR Viewer</Text>
        <Text style={styles.description}>
          This app demonstrates the integration of Google Scene Viewer for viewing 3D models in augmented reality on Android devices.
        </Text>
        
        <Text style={styles.sectionTitle}>How it Works</Text>
        <Text style={styles.text}>
          The app uses Google Scene Viewer to display 3D models in AR. When you tap on a model, it opens in the Scene Viewer app, allowing you to place and interact with the 3D model in your real environment.
        </Text>
        
        <Text style={styles.sectionTitle}>Compatibility</Text>
        <Text style={styles.text}>
          AR viewing is currently supported on Android devices with Google Play Services for AR installed. The app will automatically check for compatibility before launching the AR viewer.
        </Text>
        
        <Text style={styles.sectionTitle}>Sample Models</Text>
        <Text style={styles.text}>
          The 3D models featured in this app are from the official Khronos glTF Sample Models repository, which provides high-quality, freely available 3D models for testing and demonstration purposes.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
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
    color: '#666',
    marginBottom: 24,
    lineHeight: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    marginTop: 24,
    marginBottom: 12,
    color: '#000',
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 24,
  },
});