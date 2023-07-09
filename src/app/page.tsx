"use client"; 
import { ChakraProvider } from '@chakra-ui/react'
import Features from './components/Features';
import Header from './components/header';
import Pricing from './components/pricing';

function Home() {
  return (
    <ChakraProvider>
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>
  )
}

export default Home
