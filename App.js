import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState([]);

  alertItemName = (item) => {
    alert(item.nombre);
  };

  const getApiData = async () => {
    const resultado = await fetch(
      'https://pmoviles2.000webhostapp.com/api/api.php?comando=obtenerproductos&idtienda=1'
    );
    const datos = await resultado.json();
    console.log(datos);
    setResultado(datos);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      {resultado.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => alertItemName(item)}>
          <Image style={styles.tinyLogo} source={{ uri: item.fotografia }} />
          <Text style={styles.text}>{item.nombre}</Text>
          <Text style={{ color: 'black' }}>{item.preciodeventa}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 9 }}>
            {item.cantidad} unidades existentes
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 5,
    height: 20,
    fontSize: 14,
    color: 'black',
  },
});
