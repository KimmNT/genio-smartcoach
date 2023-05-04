import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
  return (
  //   <WebView
  //   originWhitelist={["*"]} //avoid the about:srcdoc
  //   source={{ uri: "https://dribbble.com" }} //link to the website need to show on app
  //   style={styles.webView}
  // />
  <View style={styles.container}>
    <Text>Hello</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  webView:{
    marginTop: Platform.OS === 'ios' ? 30:20
  }
});
