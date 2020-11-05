import React from 'react'
import { View, Text } from 'react-native'

export default function SearchInput() {
  return (
    <View
      style={{
        backgroundColor: '#FF7493',
        height: 80,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>유튜버 검색 기능이 들어갈 공간입니다.</Text>
      <Text>SearchInput</Text>
    </View>
  )
}
