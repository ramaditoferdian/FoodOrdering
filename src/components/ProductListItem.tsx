import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

import { Product } from '../types'
import DEFAULT from '../constants/Default'

type ProductListItemProps = {
  product: Product;
}

const ProductListItem = ({
  product
}: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || DEFAULT.product.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.light.tint
  },
});