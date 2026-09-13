import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
    <Text>...EdStore</Text>

      </View>
      <View style={styles.item}>
    <MaterialIcons name="search" size={24} />
<MaterialIcons name="favorite-border" size={24} />
<MaterialIcons name="person" size={24} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    }
})