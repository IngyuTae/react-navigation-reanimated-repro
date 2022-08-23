import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Animated from "react-native-reanimated";

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Title 1</Text>
      <Text style={styles.title}>Title 2</Text>
      <Text style={styles.title}>Title 3</Text>
      <Text style={styles.title}>Title 4</Text>
      <Text style={styles.title}>Title 5</Text>
      <Animated.View>
        <Image source={require('../assets/images/favicon.png')} />
      </Animated.View>
      <TextInput style={styles.input} />
      <TouchableOpacity onPress={() => navigation.push('NotFound')} style={styles.link}>
        <Text style={styles.linkText}>Next screen!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  input: {
    padding: 8,
    backgroundColor: 'lightgray',
  }
});
