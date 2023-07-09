// import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box pb='28' as='section'>
    <Box bg='purple.600' textAlign={['left','left','center']} color='gray.50' pt='90px' pb={198} px='8'>
      <Heading fontSize={['3xl','3xl','5xl']} fontWeight='extrabold'>
        Simple pricing for your business
        </Heading>
      <Text mt={'16px'} fontWeight='medium' fontSize={['lg','lg','2xl']}>Plans that are carefully crafted to suit your business.</Text>
    </Box>
    </Box>
  )
}
