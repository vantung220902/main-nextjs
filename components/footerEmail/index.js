import React from 'react'
import { Flex, Image, Input, Box, Heading, Text, Spacer } from '@chakra-ui/react';
import styleC from '../css/common.module.css'
import MyButton from './../button/index';

function FooterEmail() {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <Box bg="#F4F5F7" w="100%" p="60px 0">
                <Flex justify="center" direction={['column', 'column', 'row', 'row']} className={styleC.layout}>
                    <div data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="center-center">
                        <Image src={"/images/anh5.png"} alt="Anh" mr="90px" />
                    </div>
                    <Box width={['100%', '100%', '38%', '38%']}>
                        <div data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="center-center">
                            <Heading className={styleC.textSmall} mb="28px" fontSize="40px" lineHeight="40px" letterSpacing="-0.25px">
                                Start your free trial.
                            </Heading>
                            <Text mb="28px" fontSize="22px" color="#333" lineHeight="32px">
                                Get notified about company updates, news and blog posts.We hate spam.
                            </Text>
                            <Flex mb="8px" align="center" direction={['column', 'column', 'row', 'row']}>
                                <Input placeholder="Enter your email" mb="24px" h="48px" variant="contained" border="1px solid #ccc"
                                    width={['100%', '100%', '70%', '70%']} />
                                <Spacer />
                                <MyButton body={"Get Started"} color={true} mb="24px" />
                            </Flex>
                            <Flex >
                                <Text fontSize="12px">
                                    Free 14-day trial · Easy setup · Cancel any time.Check out
                                    <Text fontSize="12px" ml="4px" color="#3141C5" display="inline-block">
                                        Terms of Use
                                    </Text>.
                                </Text>

                            </Flex>
                        </div>


                    </Box>
                </Flex >
            </Box >
        </div>

    )
}

export default FooterEmail
