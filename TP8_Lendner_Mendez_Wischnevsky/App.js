import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

//
// Screens del Primer Stack (color fondo rojo)
//
function ScreenA1() {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  return (
    <View style={[styles.screenA]}>
      <Text style={styles.text}>HOME A1</Text>
      <TextInput 
        placeholder="Escribe algo..." 
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholderTextColor="#fff"
      />
      <Button title="Ir a A2" onPress={() => navigation.navigate('ScreenA2')} />
      <Text style={styles.text}>Texto ingresado: {text}</Text>
    </View>
  );
}

function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={[styles.screenA]}>
      <Text style={styles.text}>HOME A2</Text>
      <Button title="Volver a A1" onPress={() => navigation.goBack()} />
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={{ width: 80, height: 80, marginTop: 20 }}
      />
    </View>
  );
}

//
// Screens del Segundo Stack (color fondo azul)
//
function ScreenB1() {
  const navigation = useNavigation();
  const [input, setInput] = React.useState('');
  return (
    <View style={[styles.screenB]}>
      <Text style={styles.text}>HOME B1</Text>
      <TextInput
        placeholder="Escribe algo en B1"
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholderTextColor="#fff"
      />
      <Button title="Ir a B2" onPress={() => navigation.navigate('ScreenB2')} />
      <Text style={styles.text}>Valor: {input}</Text>
    </View>
  );
}

function ScreenB2() {
  const navigation = useNavigation();
  return (
    <View style={[styles.screenB]}>
      <Text style={styles.text}>HOME B2</Text>
      <Button title="Volver a B1" onPress={() => navigation.goBack()} />
      <Image
        source={{ uri: 'https://expo.dev/static/brand/expo-icon.png' }}
        style={{ width: 80, height: 80, marginTop: 20 }}
      />
    </View>
  );
}

//
// Screens del Tercer Stack (color fondo verde)
//
function ScreenC1() {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  return (
    <View style={[styles.screenC]}>
      <Text style={styles.text}>HOME C1</Text>
      <TextInput
        placeholder="Escribe algo en C1"
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholderTextColor="#fff"
      />
      <Button title="Ir a C2" onPress={() => navigation.navigate('ScreenC2')} />
      <Text style={styles.text}>Texto: {text}</Text>
    </View>
  );
}
function ScreenC2() {
  const navigation = useNavigation();
  return (
    <View style={[styles.screenC]}>
      <Text style={styles.text}>HOME C2</Text>
      <Button title="Volver a C1" onPress={() => navigation.goBack()} />
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 80, height: 80, marginTop: 20 }}
      />
    </View>
  );
}

//
// Screens del Cuarto Stack (color fondo gris)
// Aquí implementamos formulario con Nombre y Teléfono que se pasan a ScreenD2
//
function ScreenD1() {
  const navigation = useNavigation();
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  
  return (
    <View style={[styles.screenD]}>
      <Text style={styles.text}>HOME D1 - Formulario</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholderTextColor="#000"
      />
      <TextInput
        placeholder="Teléfono"
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
        placeholderTextColor="#000"
      />
      <Button
        title="Enviar datos"
        onPress={() => navigation.navigate('ScreenD2', { nombre, telefono })}
      />
    </View>
  );
}

function ScreenD2() {
  const route = useRoute();
  const { nombre, telefono } = route.params || { nombre: '', telefono: '' };
  const navigation = useNavigation();

  return (
    <View style={[styles.screenD]}>
      <Text style={styles.text}>HOME D2 - Datos recibidos</Text>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Teléfono: {telefono}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

//
// Creación de los stacks
//
const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff0000' }, headerTintColor: '#fff' }}>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0000ff' }, headerTintColor: '#fff' }}>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator screenOptions={{ headerStyle: { backgroundColor: '#008000' }, headerTintColor: '#fff' }}>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator screenOptions={{ headerStyle: { backgroundColor: '#808080' }, headerTintColor: '#fff' }}>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

//
// Creación del BottomTabNavigator con iconos y colores
//
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home A') iconName = 'home';
          else if (route.name === 'Home B') iconName = 'search';
          else if (route.name === 'Home C') iconName = 'person';
          else if (route.name === 'Home D') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home A" component={StackANavigator} />
      <Tab.Screen name="Home B" component={StackBNavigator} />
      <Tab.Screen name="Home C" component={StackCNavigator} />
      <Tab.Screen name="Home D" component={StackDNavigator} />
    </Tab.Navigator>
  );
}

// Envolviendo la aplicación en el NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  screenB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff',
  },
  screenC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
  },
  screenD: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 8,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: 'white',
    marginBottom: 12,
  },
});
