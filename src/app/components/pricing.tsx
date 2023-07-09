// 'use client'
import { Box, Button, Flex, Heading, Text, StackProps, HStack, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import CheckIcon from '../../icons/icon';

export function ListItem(props: StackProps) {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest as any} align="flex-start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
}



export default function Pricing() {
  return (
    <Box mx='6' as='section'>
    <Box margin='auto'  maxW='900px' mt='-256px' borderRadius='xl' overflow='hidden' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' textAlign='center'>
      <Flex direction={['column', 'column', 'row']} >
        <Box bg='#F0EAFB' p={['28px', '60px', '60px']}>
          <Text fontSize='xl' fontWeight='extrabold'>Premium PRO</Text>
          <Heading as='h3' fontSize={['5xl','5xl','6xl']} mt='4'>$329</Heading>
          <Text fontSize='lg' fontWeight='medium' color='gray.900' mt='2'>billed just once</Text>
          <Button colorScheme={'purple'} size={['md','lg','lg']} w={['auto','282px','282px']} mt='9' >Get Started</Button>
        </Box>
        <Box p={['32px','32px','60px']} fontSize='lg' bg='white'>
          <Text textAlign='left'>Access these features when you get this pricing package for your business.</Text>
          <Stack as='ul' spacing='5' pt='6'>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
    </Box>  
  )
}
