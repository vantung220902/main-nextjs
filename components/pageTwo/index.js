import React from 'react'
import { Box, Image, Flex, Spacer, Heading, Text } from '@chakra-ui/react';
import styles from './styles.module.css'
import styleC from '../css/common.module.css';

function PageTwo() {
    return (
        <Box className={styleC.layout} pb="50px" >
            <Image src={"/images/Logos.png"} alt="Anh" className={styles.img} />
            <Flex direction={['column', 'column', 'row', 'row']} >
                <Box width={['100%', '100%', '40%', '40%']}>
                    <Text className={styleC.textSmall} lineHeight="34px" mb="18px" color="#009B4D" fontWeight="bold">
                        <div data-aos="fade-down-right">

                            Features
                        </div>
                    </Text>
                    <Heading fontSize="56px" lineHeight="56px" mb="38px" letterSpacing="-0.5px"
                        fontWeight="bold" color="##2B292D">
                        <div data-aos="fade-down-left">

                            Easily find leads and customers
                        </div>
                    </Heading>
                    <Text fontSize="24px" lineHeight="34px" mb="38px" color="##2B292D" fontWeight="400">
                        <div data-aos="fade-up-left">

                            Send one-off and automated email, push, and in-app messages to people. Create better stories.
                        </div>
                    </Text>
                    <Box display={['none', 'none', 'block', 'block']}>
                        <Flex mb="8px">
                            <Image src={"/images/IconLocation.png"} alt="Anh" />
                            <Text ml="12px" cursor="pointer" className={styleC.textSmall} color="#3142C6" >
                                <div data-aos="fade-up-right">

                                    Acquire new customers
                                </div>
                            </Text>
                        </Flex>
                        <Text fontWeight="400" fontSize="18px" color="#2B292D">
                            <div data-aos="fade-down-right">

                                Everything you need to start building ??? including open-source code, documentation.
                            </div>
                        </Text>
                        <Box h="3px" bg="#3142C6" m="14px 0 24px">

                        </Box>
                        <Flex pb="16px" borderBottom="1px solid #333" mt="14px">
                            <Image src={"/images/icon1.png"} alt="Anh" />
                            <Text ml="12px" cursor="pointer" className={styleC.textSmall} color="#2B292D"  >
                                <div data-aos="fade-down-left">

                                    Acquire new customers
                                </div>
                            </Text>
                        </Flex>
                        <Flex pb="16px" borderBottom="1px solid #333" mt="14px">
                            <Image src={"/images/icon2.png"} alt="Anh" />
                            <Text ml="12px" cursor="pointer" className={styleC.textSmall} color="#2B292D"  >
                                <div data-aos="fade-up-right">
                                    Acquire new customers
                                </div>
                            </Text>
                        </Flex>
                    </Box>
                </Box>
                <Spacer />
                <Image display={['none', 'none', 'block', 'block']} w="52%" src={"/images/page2.png"} alt="Anh" className={styles.imgPage} />
                <Image display={['block', 'block', 'none', 'none']} w="90%" src={"/images/chim.png"} alt="Anh" className={styles.imgPage} />

                <Text display={['block', 'block', 'none', 'none']}>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        A better way to acquire new users
                    </div>

                </Text>
            </Flex>
            <Box display={['block', 'block', 'none', 'none']} w="100%" h="1px" bg="#ccc" m="40px 0">
            </Box>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <Flex direction={"column"} display={['block', 'block', 'none', 'none']}>
                    <Box width={"100%"}>
                        <Text className={styleC.textSmall} lineHeight="34px" mb="18px" color="#009B4D" fontWeight="bold">
                            Engage Users
                        </Text>
                        <Heading fontSize="56px" lineHeight="56px" mb="38px" letterSpacing="-0.5px"
                            fontWeight="bold" color="##2B292D">
                            Engage with your audience
                        </Heading>
                        <Text fontSize="24px" lineHeight="34px" mb="38px" color="##2B292D" fontWeight="400">
                            Send one-off and automated email, push, and in-app messages to people. Create better stories.
                        </Text>
                    </Box>
                    <Spacer />
                    <Image w="90%" src={"/images/mirror.png"} alt="Anh" className={styles.imgPage} />
                    <Text>
                        Knowledge base and smart self-service
                    </Text>
                </Flex>
            </div>
            <Box display={['block', 'block', 'none', 'none']} w="100%" h="1px" bg="#ccc" m="40px auto">
            </Box>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <Flex direction={"column"} display={['block', 'block', 'none', 'none']}>
                    <Box width={"100%"}>
                        <Text className={styleC.textSmall} lineHeight="34px" mb="18px" color="#009B4D" fontWeight="bold">
                            Support
                        </Text>
                        <Heading fontSize="56px" lineHeight="56px" mb="38px" letterSpacing="-0.5px"
                            fontWeight="bold" color="##2B292D">
                            The best customer experiences
                        </Heading>
                        <Text fontSize="24px" lineHeight="34px" mb="38px" color="##2B292D" fontWeight="400">
                            A beautifully simple system for tracking, prioritizing, and solving customer support tickets.
                        </Text>
                    </Box>
                    <Spacer />
                    <Image w="90%" src={"/images/tivi.png"} alt="Anh" className={styles.imgPage} />
                    <Text>
                        Knowledge base and smart self-service
                    </Text>
                </Flex>
            </div>

        </Box>
    )
}

export default PageTwo
