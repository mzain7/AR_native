import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Cuboid as Cube, View as ViewIcon } from 'lucide-react-native';
import { useState } from 'react';
import ModelViewer from '@/components/ModelViewer';

const models = [
  {
    id: '1',
    name: 'Astronaut',
    description: 'Detailed 3D model of an astronaut',
    url: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    thumbnail: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=500&q=80',
  },
  {
    id: '2',
    name: 'Duck',
    description: 'Classic yellow rubber duck',
    url: 'https://modelviewer.dev/shared-assets/models/Duck.glb',
    thumbnail: 'https://images.unsplash.com/photo-1635700413624-f8f0c6f7e8e7?w=500&q=80',
  },
  {
    id: '3',
    name: 'Robot',
    description: 'Animated robot character',
    url: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80',
  },
];

export default function ModelsScreen() {
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  const renderItem = ({ item }: { item: typeof models[0] }) => (
    <Pressable
      style={({ pressed }) => [
        styles.modelCard,
        pressed && styles.modelCardPressed,
      ]}
      onPress={() => setSelectedModel(item)}>
      <View style={styles.modelContent}>
        <View style={styles.iconContainer}>
          <Cube size={32} color="#007AFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.modelName}>{item.name}</Text>
          <Text style={styles.modelDescription}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.viewButtonContainer}>
        <Text style={styles.viewButton}>View Model</Text>
        <ViewIcon size={16} color="#007AFF" style={styles.viewButtonIcon} />
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>3D Models Gallery</Text>
        <Text style={styles.subtitle}>
          Tap a model to view it in 3D
        </Text>
      </View>
      <FlatList
        data={models}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <ModelViewer
        visible={selectedModel !== null}
        modelUrl={selectedModel?.url || ''}
        onClose={() => setSelectedModel(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  list: {
    padding: 20,
  },
  modelCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  modelCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  modelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  modelName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    marginBottom: 4,
    color: '#000',
  },
  modelDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  viewButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
  },
  viewButton: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#007AFF',
    marginRight: 4,
  },
  viewButtonIcon: {
    marginTop: 1,
  },
});