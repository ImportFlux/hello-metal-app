import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Pressable, Vibration, Alert } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
    const handlePress = () => {
        Vibration.vibrate(200)
        Alert.alert("Hello Metal")
    }
  return (
    <>

    <View style={styles.container}>
        <Pressable style={styles.primaryButton} onPress={handlePress}>
            <Text style={styles.title}>Hello! Metal</Text>
        </Pressable>
        <View style={{height : 30}}/>

        <Link href='/view-dog' asChild>
        <Pressable style={styles.secondaryButton}>
            <Text style={styles.buttonText}>View Dog</Text>
        </Pressable>
        </Link>
        
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
 title:{
    fontSize: 32,
    lineHeight: 48,
    fontWeight: 700,
 },
 primaryButton:{
    backgroundColor: 'red',
    paddingVertical: 18,
    paddingHorizontal: 20,
 },
 secondaryButton:{
    paddingVertical: 14,
    paddingHorizontal: 18,
 },
 buttonText:{
    color: 'black',
    fontSize: 16,
    fontWeight: 600
 }
});
