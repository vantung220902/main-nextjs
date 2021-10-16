import React from 'react'
import styleC from '../css/common.module.css'
import MyButton from '../button'
import { Box, Text, Heading, Flex, Spacer } from '@chakra-ui/react';
function PageFive() {
    return (
        <Box bg="#edf8fb" mixBlendMode="normal" padding="100px 0">
            <Box width={['95%', '95%', '555px', '555px']} m="0 auto" textAlign="center">
                <Text className={styleC.textSmall} mb="18px">
                    Engage Visitors
                </Text>
                <Heading fontSize="56px" color="#2B292D" mb="18px" letterSpacing="-0.5px">
                    Understand your audience
                </Heading>
                <Text className={styleC.textSmall} mb="18px" fontWeight="400">
                    Early stage company? Eligible applicants get all of our products for just $49 a month.
                </Text>
                <Flex justify="center" mb="88px">
                    <MyButton body={"Get Started"} color={true} />
                    <MyButton body={"Learn More"} />
                </Flex>
            </Box>
            <Flex className={styleC.layout} wrap="wrap">
                <Box backgroundPosition="center"
                    backgroundRepeat="no-repeat" width={['100%', '100%', '262px', '262px']} h="300px" mb="18px" backgroundImage="url('/images/Item 1.png')" alt="Anh" />
                <Spacer />
                <Box backgroundPosition="center"
                    backgroundRepeat="no-repeat" width={['100%', '100%', '262px', '262px']} h="300px" mb="18px" backgroundImage="url('/images/Item 2.png')" alt="Anh" />
                <Spacer />
                <Box backgroundPosition="center"
                    backgroundRepeat="no-repeat" width={['100%', '100%', '262px', '262px']} h="300px" mb="18px" backgroundImage="url('/images/Item 3.png')" alt="Anh" />
                <Spacer />
                <Box backgroundPosition="center"
                    backgroundRepeat="no-repeat" width={['100%', '100%', '262px', '262px']} h="300px" mb="18px" backgroundImage="url('/images/Item 4.png')" alt="Anh" />
            </Flex>
        </Box>
    )
}

export default PageFive
