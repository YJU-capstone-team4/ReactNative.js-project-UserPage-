/* eslint-disable global-require */
import React from 'react'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

// Apollo
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from '~/graphql'

// Navigation Component
import RootNavigationContainer from './src/navigations/RootNavigation'

export default function App() {
  // loading fonts
  const [isLoaded] = useFonts({
    NanumSquare_acBold: require('~/assets/fonts/NanumSquare_acBold.ttf'),
    NanumSquare_acExtraBold: require('~/assets/fonts/NanumSquare_acExtraBold.ttf'),
    NanumSquare_acLight: require('~/assets/fonts/NanumSquare_acLight.ttf'),
    NanumSquare_acRegular: require('~/assets/fonts/NanumSquare_acRegular.ttf'),
  })

  return (
    <>
      {!isLoaded ? (
        <AppLoading />
      ) : (
        <ApolloProvider client={apolloClient}>
          <RootNavigationContainer />
        </ApolloProvider>
      )}
    </>
  )
}
