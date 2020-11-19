import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import styles
import { Colors, Typography } from '@styles'

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    textTransform: 'uppercase',
    flex: 1,
    backgroundColor: Colors.WHITE,
    elevation: 20,
    shadowColor: Colors.GRAY_9,
  },
  buttonContainer: {
    elevation: 20,
    marginLeft: 12,
    width: 60,
    height: 60,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.BLUE_5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_16,
  },
  hambugerContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 14,
    left: 12,
  },
})

export default function SearchInput(props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        marginTop: props.directionTop ? 40 : null,
        paddingHorizontal: 10,
      }}
    >
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          style={styles.hambugerContainer}
          name="format-list-bulleted"
          color="black"
          size={30}
        />
        <TextInput
          style={{
            paddingLeft: 27,
            fontFamily: Typography.FONT_FAMILY_REGULAR,
            fontSize: Typography.FONT_SIZE_16,
          }}
          // onChangeText={(text) => setTitle(text)}
          value=""
          placeholder="내가 좋아하는 유튜버를 검색해보세요"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <MaterialCommunityIcons name="map-search" color="white" size={26} />
        <Text style={styles.buttonText}>검색</Text>
      </TouchableOpacity>
    </View>
  )
}
