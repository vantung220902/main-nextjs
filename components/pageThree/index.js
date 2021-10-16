import React from 'react'
import { Box, Image, Text, Flex, Spacer, Heading, Avatar } from '@chakra-ui/react'
import styleC from '../css/common.module.css'
function PageThree() {
    return (
        <Box bg="#FCF0E3">
            <Flex width={['100%', '100%', '80%', '80%']} m="0 auto" direction={['column', 'column', 'row', 'row']} p="142px 0 118px">
                <Box width={['100%', '100%', '40%', '40%']} mb="24px">
                    <Image src={"/images/anh3.png"} alt="anh" />
                    <Text display={['none', 'none', 'block', 'block']}>
                        Connect with customers and grow faster
                    </Text>
                </Box>
                <Spacer />
                <Box width={['96%', '96%', '45%', '45%']} m="0 auto">
                    <Text className={styleC.textSmall} lineHeight="34px" mb="18px" color="#F1592B">
                        Team Inbox
                    </Text>
                    <Heading fontSize="56px" lineHeight="56px" mb="28px" letterSpacing="-0.5px"
                        fontWeight="bold" color="#2B292D">
                        Manage conversations
                    </Heading>
                    <Text fontSize="24px" lineHeight="34px" mb="28px" color="#2B292D" fontWeight="400">
                        One place to manage and respond to all conversations with leads and users. Receive messages from leads.
                    </Text>
                    <Box bg="#FFFFFF" p="24px" borderBottom="4px solid #0185D0">
                        <Text fontSize="20px" mb="14px">
                            “Great widgets. Great selection. Great design and <b>easy to implement</b>. Definitely a huge time saver for a web developer!”
                        </Text>
                        <Flex>
                            <Avatar size="md" name="Ryan Florence" src="/images/avatar.png" />
                            <Flex direction="column">
                                <Text fontWeight="bold">
                                    Viella Malkovich
                                </Text>
                                <Text>
                                    Creative Director at Johnson
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default PageThree
