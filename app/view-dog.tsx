import {
  Platform,
  StyleSheet,
  View,
  Text,
  Pressable,
  Vibration,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, router, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function ViewDogScreen() {
    const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomDogImage = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const image = await response.json();
      setImageUrl(image.message);
    } catch (error) {
      console.log("ERROR: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <>
      <View style={styles.container}>

         <Pressable
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={styles.backText}>Back</Text>
                </Pressable>

                
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            {imageUrl && (
              <>
                <Image source={{ uri: imageUrl }} style={styles.image} />

                <Pressable
                  style={styles.primaryButton}
                  onPress={fetchRandomDogImage}
                >
                  <Text style={styles.buttonText}>Fetch New Dog</Text>
                </Pressable>
              </>
            )}
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
    margin: 10,
  },
  primaryButton: {
    backgroundColor: "red",
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
   backButton: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    position: 'absolute',
    top: 45,
    left: 20,
    backgroundColor: 'teal',
    padding: 8,
    borderRadius: 8,
  },
   backText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
});
