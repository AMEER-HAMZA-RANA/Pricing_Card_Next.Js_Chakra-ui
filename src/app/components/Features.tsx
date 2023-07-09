import { HStack, Box, Icon, StackProps, Text, Stack } from "@chakra-ui/react";
// import { FeatureProps } from 'framer-motion'
import React from "react";
import { MSIcon } from "@/icons/icon";
import { HFIcon } from "@/icons/icon";
import { MBGIcon } from "@/icons/icon";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}
function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="5" align='start'>
      <Icon as={icon} boxSize={['8','8',"12"]}></Icon>
      <Text textAlign='left' fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box as='section' maxW='950px' m='auto' pt='60px' pb='8'>
    <Stack px='12' direction={['column','column','row']} spacing={['6','6','5']}>
      <Feature icon={MBGIcon}>30 days money back Guarantee</Feature>
      <Feature icon={HFIcon}>No setup fees 100% hassle-free</Feature>
      <Feature icon={MSIcon}>
        No monthly subscription Pay once and for all
      </Feature>
    </Stack>
    </Box>
  );
}
