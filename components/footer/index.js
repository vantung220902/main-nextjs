import React from 'react'
import styleC from '../css/common.module.css'
import { Box, Image, Text, Flex, Spacer, List, ListItem } from '@chakra-ui/react';
import { FaFacebookSquare, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <Flex direction={['column', 'column', 'row', 'row']} className={styleC.layout} justify="space-between" padding="40px 0">
                <Box width={['100%', '100%', '24%', '24%']}>
                    <Box display="flex">
                        <Image src={"/images/Icon.png"} alt="Icon" />
                        <Box direction="column" mt="4px">
                            <Text color="Back" fontWeight="bold" fontSize="20">Foundation</Text>
                            <Text fontSize="sm">Startup landing template</Text>
                        </Box>
                    </Box>
                    <Text>
                        Foundation is a website template for startups and small teams. It helps to build a website in no time.
                    </Text>
                    <Flex m="12px 0">
                        <Image mr="12px" src={"/images/Google Play.png"} alt="Icon" />
                        <Image mr="12px" src={"/images/AppStore.png"} alt="Icon" />
                    </Flex>
                </Box>
                <Box width={['100%', '100%', '20%', '20%']}>
                    <Text mb="12px" className={styleC.textSmall}>
                        Product
                    </Text>
                    <List>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Acquire Users</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Content Marketing</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Website Templates</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Customer Management</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Virtual Inbox</ListItem>
                    </List>
                </Box>
                <Box width={['100%', '100%', '20%', '20%']}>
                    <Text mb="12px" className={styleC.textSmall}>
                        Company
                    </Text>
                    <List>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> About Foundation</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Brand Guidelines</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Press Kit</ListItem>
                        <ListItem cursor="pointer" fontSize="18px" mb="8px"> Support</ListItem>
                    </List>
                </Box>
            </Flex>
            <Box h="2px" bg="#ccc" />
            <Flex justify="space-between" direction={['column', 'column', 'row', 'row']} w="90%" m="0 auto" p="20px 0">
                <Flex mb="8px">
                    <Text mr="8px">
                        Terms
                    </Text>
                    <Text mr="8px">
                        Privacy
                    </Text>
                    <Text mr="8px">
                        License
                    </Text>
                </Flex>
                <Spacer />
                <Flex>
                    <Box mr="8px">
                        <FaFacebookSquare />
                    </Box>
                    <Box mr="8px">
                        < FaTwitter />
                    </Box>
                    <Box mr="8px">
                        < FaLinkedinIn />
                    </Box>

                </Flex>
            </Flex>
        </>
    )
}

export default Footer
