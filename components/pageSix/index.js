import React, { useState } from 'react'
import { Box, Image, Flex, Text, Heading } from '@chakra-ui/react';
import styleC from '../css/common.module.css';
import MyButton from './../button/index';
import styles from './styles.module.css';
import { FaChevronRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function PageSix() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [active, setActive] = useState(1);
    return (

        <Box className={styleC.layout} position="relative" p="70px 0"  >
            <Image src={"/images/Logos.png"} alt="Anh" />
            <Carousel arrows={true} responsive={responsive} showDots={true} >
                <Box textAlign="center" m="60px 0 120px">
                    <Text className={styleC.textSmall} mb="18px" color="#3142C6">
                        Trusted by the world’s most innovative businesses – big and small
                    </Text>
                    <Text className={styleC.textSmall} m="0 auto" mb="18px" maxW="750px" fontWeight="400">
                        “Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support”
                    </Text>
                    <Text fontWeight="bold">
                        Viella Malkovich
                    </Text>
                    <Text>
                        Creative Director at Johnson
                    </Text>
                </Box>
                <Box textAlign="center" m="60px 0 120px">
                    <Text className={styleC.textSmall} mb="18px" color="#3142C6">
                        Trusted by the world’s most innovative businesses – big and small
                    </Text>
                    <Text className={styleC.textSmall} m="0 auto" mb="18px" maxW="750px" fontWeight="400">
                        “Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support”
                    </Text>
                    <Text fontWeight="bold">
                        Viella Malkovich
                    </Text>
                    <Text>
                        Creative Director at Johnson
                    </Text>
                </Box>
                <Box textAlign="center" m="60px 0 120px">
                    <Text className={styleC.textSmall} mb="18px" color="#3142C6">
                        Trusted by the world’s most innovative businesses – big and small
                    </Text>
                    <Text className={styleC.textSmall} m="0 auto" mb="18px" maxW="750px" fontWeight="400">
                        “Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support”
                    </Text>
                    <Text fontWeight="bold">
                        Viella Malkovich
                    </Text>
                    <Text>
                        Creative Director at Johnson
                    </Text>
                </Box>
            </Carousel>
            <Box backgroundImage="url('/images/anh4.png')" backgroundPosition="center"
                backgroundRepeat="no-repeat" position={['', '', 'absolute', 'absolute']} mt="4px" w="273px" h="243px" right="0" top="21%" />
            <Box padding="60px 0" borderTop="1px solid #cccc">
                <Box width={['100%', '100%', '555px', '555px']} m="0 auto" textAlign="center">
                    <Heading fontSize="56px" color="#2B292D" mb="18px" letterSpacing="-0.5px">
                        We’re hiring
                    </Heading>
                    <Text className={styleC.textSmall} mb="18px" fontWeight="400">
                        We’re a team of lifelong learners. We’re equal parts left and right brained.
                    </Text>
                    <MyButton body={"More about Company"} color={true} />
                </Box>
                <Flex display={['none', 'none', 'flex', 'flex']} direction="column" align="center" mt="100px">
                    <Flex cursor="pointer" onClick={() => {
                        setActive(1)
                    }} className={`${styles.btn} ${active === 1 ? styles.primary : ""}`} justify="space-between" align="center">
                        <Heading fontSize="22px" lineHeight="28px" fontWeight="bold" w="60%">
                            Front-End Developer
                        </Heading>
                        <Text fontSize="14px">
                            Los Angeles / Remote
                        </Text>
                        <FaChevronRight />
                    </Flex>
                    <Flex cursor="pointer" onClick={() => {
                        setActive(2)
                    }} className={`${styles.btn} ${active === 2 ? styles.primary : ""}`} justify="space-between" align="center" >
                        <Heading fontSize="22px" lineHeight="28px" fontWeight="bold" w="60%">
                            Community Manager
                        </Heading>
                        <Text fontSize="14px">
                            New York / Full-Time
                        </Text>
                        <FaChevronRight />
                    </Flex>
                    <Flex cursor="pointer" onClick={() => {
                        setActive(3)
                    }} className={`${styles.btn} ${active === 3 ? styles.primary : ""}`} justify="space-between" align="center" >
                        <Heading fontSize="22px" lineHeight="28px" fontWeight="bold" w="60%">
                            UX/UI Designer
                        </Heading>
                        <Text fontSize="14px">
                            New York / Full-Time
                        </Text>
                        <FaChevronRight />
                    </Flex>
                </Flex>
                <Flex display={['block', 'block', 'none', 'none']} direction="column" align="center" mt="100px">
                    <Flex justify="space-between" align="center" border="1px solid rgba(43, 41, 45, 0.2);" mb="12px" borderRadius="0px 6px 6px 0px" >
                        <Flex direction="column" w="60%" >
                            <Heading fontSize="22px" lineHeight="28px" fontWeight="bold">
                                Front-End Developer
                            </Heading>
                            <Text color="#ccc" fontSize="14px">
                                Los Angeles / Remote
                            </Text>
                        </Flex>
                        <Flex align="center" bg="#D5D4D5" w="10%" borderRadius="0px 8px 8px 0px" justify="flex-end" height="100px">
                            <FaChevronRight />
                        </Flex>
                    </Flex>
                    <Flex justify="space-between" align="center" border="1px solid rgba(43, 41, 45, 0.2);" mb="12px" borderRadius="0px 6px 6px 0px" >
                        <Flex direction="column" w="60%" >
                            <Heading fontSize="22px" lineHeight="28px" fontWeight="bold">
                                Community Manager
                            </Heading>
                            <Text color="#ccc" fontSize="14px">
                                New York / Full-Time
                            </Text>
                        </Flex>
                        <Flex align="center" bg="#D5D4D5" w="10%" borderRadius="0px 8px 8px 0px" justify="flex-end" height="100px">
                            <FaChevronRight />
                        </Flex>
                    </Flex>
                    <Flex justify="space-between" align="center" border="1px solid rgba(43, 41, 45, 0.2);" mb="12px" borderRadius="0px 6px 6px 0px" >
                        <Flex direction="column" w="60%" >
                            <Heading fontSize="22px" lineHeight="28px" fontWeight="bold">
                                Front-End Developer
                            </Heading>
                            <Text color="#ccc" fontSize="14px">
                                UX/UI Designer
                            </Text>
                        </Flex>
                        <Flex align="center" bg="#D5D4D5" w="10%" borderRadius="0px 8px 8px 0px" justify="flex-end" height="100px">
                            <FaChevronRight />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default PageSix
