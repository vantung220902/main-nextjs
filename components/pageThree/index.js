import React from 'react'
import { Box, Image, Text, Flex, Spacer, Heading, Avatar } from '@chakra-ui/react'
import styleC from '../css/common.module.css'
function PageThree() {
    return (
        <Box w="100%" bg="#FCF0E3">
            <Flex width={['100%', '100%', '80%', '80%']} m="0 auto" direction={['column', 'column', 'row', 'row']} p="142px 0 118px">
                <Box width={['100%', '100%', '40%', '40%']} mb="24px">
                    <Image src={"/images/anh3.png"} alt="anh" />
                    <div style={{ with: '100%' }} data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <Text display={['none', 'none', 'block', 'block']}>
                            Connect with customers and grow faster
                        </Text>
                    </div>
                </Box>

                <Spacer />
                <div style={{ with: '100%' }} data-aos="fade-up"
                    data-aos-easing="linear"

                    data-aos-duration="1000">
                    <Box width={['96%', '96%', '45%', '45%']} m="0 auto">
                        <Text className={styleC.textSmall} lineHeight="34px" mb="18px" color="#F1592B">
                            <div style={{ with: '100%' }} data-aos="zoom-out-right">

                                Team Inbox
                            </div>
                        </Text>
                        <Heading fontSize="56px" lineHeight="56px" mb="28px" letterSpacing="-0.5px"
                            fontWeight="bold" color="#2B292D">
                            <div style={{ with: '100%' }} data-aos="zoom-out-left">

                                Manage conversations
                            </div>
                        </Heading>
                        <Text fontSize="24px" lineHeight="34px" mb="28px" color="#2B292D" fontWeight="400">
                            <div style={{ with: '100%' }} data-aos="zoom-out-right">

                                One place to manage and respond to all conversations with leads and users. Receive messages from leads.
                            </div>
                        </Text>
                        <Box bg="#FFFFFF" p="24px" borderBottom="4px solid #0185D0">
                            <Text fontSize="20px" mb="14px">
                                <div style={{ with: '100%' }} data-aos="zoom-out-left">

                                    “Great widgets. Great selection. Great design and <b>easy to implement</b>. Definitely a huge time saver for a web developer!”
                                </div>
                            </Text>
                            <Flex>
                                <Avatar size="md" name="Ryan Florence" src="/images/avatar.png" />
                                <div style={{ with: '100%' }} data-aos="zoom-out-down">
                                    <Flex direction="column">
                                        <Text fontWeight="bold">
                                            Viella Malkovich
                                        </Text>
                                        <Text>
                                            Creative Director at Johnson
                                        </Text>
                                    </Flex>
                                </div>
                            </Flex>
                        </Box>
                    </Box>
                </div>
            </Flex>
        </Box>
    )
}

export default PageThree
