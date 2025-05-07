import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      <Text style={styles.text}>
        Nome: Rafael Ferreira dos Santos{'\n'}
        Email: miasrafa@gmail.com{'\n'}
        GitHub: github.com/RafaSantos19
      </Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
