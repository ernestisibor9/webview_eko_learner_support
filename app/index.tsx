import { StyleSheet, Text, View,  Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

const index = () => {
    useEffect(() => {
        SplashScreen.hideAsync();
      }, []);
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://ekolearnerssupport.com' }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode="always" // 👈 allow mixed content
        startInLoadingState={true}
        onError={(e) => console.log('WebView error:', e.nativeEvent)}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
  });
