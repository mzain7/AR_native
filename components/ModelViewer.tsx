import React from 'react';
import { StyleSheet, Modal, View, Pressable, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { X } from 'lucide-react-native';

interface ModelViewerProps {
  visible: boolean;
  modelUrl: string;
  onClose: () => void;
}

export default function ModelViewer({
  visible,
  modelUrl,
  onClose,
}: ModelViewerProps) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <style>
          body { margin: 0; overflow: hidden; }
          model-viewer {
            width: 100%;
            height: 100vh;
            background-color: #f5f5f5;
          }
        </style>
      </head>
      <body>
        <model-viewer
  id="arViewer"
  src="${modelUrl}"
  ar
  ar-modes="webxr scene-viewer quick-look"
  camera-controls
  auto-rotate
  shadow-intensity="1"
  touch-action="pan-y"
  interaction-prompt="auto"
  min-camera-orbit="auto auto auto"
  max-camera-orbit="auto auto auto"
  min-field-of-view="10deg"
  max-field-of-view="45deg"
  disable-tap
  environment-image="neutral"
  poster=""
  reveal="auto"
  camera-orbit="0deg 75deg auto"
  camera-target="auto auto auto"
  field-of-view="30deg"
  auto-rotate-delay="2000"
  zoom
  gesture-config="pan-y rotation zoom"
  ar-placement="floor"
>
</model-viewer>

      </body>
    </html>
  `;

  // Handles AR link redirection
  const handleNavigation = (event: any) => {
    const url = event.url;

    if (url.startsWith('intent://')) {
      // Convert 'intent://' URL to a usable 'https://' fallback URL
      const fixedUrl = url
        .replace('intent://', 'https://')
        .split('#Intent;')[0];

      Linking.openURL(fixedUrl).catch((err) =>
        console.error('Failed to open AR link', err)
      );
      return false; // Prevent WebView from handling it
    }

    return true; // Allow normal navigation
  };

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
          onShouldStartLoadWithRequest={handleNavigation} // 🔥 Handles AR activation
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
