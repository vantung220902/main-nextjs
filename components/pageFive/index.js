import React from 'react'
import styleC from '../css/common.module.css'
import MyButton from '../button'
import { Box, Text, Heading, Flex, Spacer, Image } from '@chakra-ui/react';
function PageFive() {
    return (
        <Box bg="#edf8fb" mixBlendMode="normal" w="110%" padding="100px 0">
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
                <Flex justify="center" align="center" borderRadius="4px" _hover={{
                    background: "#3141C5",
                    transition: "all 0.3s linear",
                    cursor: 'pointer',
                }}
                    width={['100%', '100%', '262px', '262px']} bg="#FFFFFF" mb="18px" >
                    <Image src={'/images/robot.png'} w="80%" h="80%" alt="Anh" />
                </Flex>
                <Spacer />
                <Flex justify="center" align="center" borderRadius="4px" _hover={{
                    background: "#3141C5",
                    transition: "all 0.3s linear",
                    cursor: 'pointer',
                }}
                    width={['100%', '100%', '262px', '262px']} bg="#FFFFFF" mb="18px" >
                    <Image src={'/images/tivi.png'} w="80%" h="80%" alt="Anh" />
                </Flex>
                <Spacer />
                <Flex justify="center" align="center" borderRadius="4px" _hover={{
                    background: "#3141C5",
                    transition: "all 0.3s linear",
                    cursor: 'pointer',
                }}
                    width={['100%', '100%', '262px', '262px']} bg="#FFFFFF" mb="18px" >
                    <Image src={'/images/leter.png'} w="80%" h="80%" alt="Anh" />
                </Flex>
                <Spacer />
                <Flex justify="center" align="center" borderRadius="4px" _hover={{
                    background: "#3141C5",
                    transition: "all 0.3s linear",
                    cursor: 'pointer',
                }}
                    width={['100%', '100%', '262px', '262px']} bg="#FFFFFF" mb="18px" >
                    <Image src={'/images/den.png'} w="80%" h="80%" alt="Anh" />
                </Flex>
            </Flex>
        </Box>
    )
}

export default PageFive
