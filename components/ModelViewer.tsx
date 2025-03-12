import React from 'react';
import { StyleSheet, Modal, View, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import { X } from 'lucide-react-native';

interface ModelViewerProps {
  visible: boolean;
  modelUrl: string;
  onClose: () => void;
}

export default function ModelViewer({ visible, modelUrl, onClose }: ModelViewerProps) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <style>
          body { margin: 0; }
          model-viewer {
            width: 100%;
            height: 100vh;
            background-color: #f5f5f5;
          }
        </style>
      </head>
      <body>
        <model-viewer
          src="${modelUrl}"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1"
          exposure="1"
          style="background-color: #f5f5f5;">
        </model-viewer>
      </body>
    </html>
  `;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Pressable style={styles.closeButton} onPress={onClose}>
          <X size={24} color="#000" />
        </Pressable>
        <WebView
          source={{ html: htmlContent }}
          style={styles.webview}
          originWhitelist={['*']}
          allowsInlineMediaPlayback
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});