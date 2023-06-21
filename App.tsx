import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { myTheme } from './src/styles';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ThemeProvider theme={myTheme}>
      <Routes />
      </ThemeProvider>
    </>
  );
}
