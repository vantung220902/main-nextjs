import React from 'react'
import { HStack, Box, Text, Image } from "@chakra-ui/react"
import { FaCaretDown } from "react-icons/fa"
import styles from './styles.module.css'
import MyButton from '../button'
function Header() {
    return (
        <HStack className={styles.header} w="100%" h="auto" m="45px 0">
            <Box display="flex">
                <Image src={"/images/Icon.png"} alt="Icon" />
                <Box direction="column" mt="4px">
                    <Text color="Back" fontWeight="bold" fontSize="20">Foundation</Text>
                    <Text fontSize="sm">Startup landing template</Text>
                </Box>
            </Box>
            <HStack spacing="24px">
                <Text className={styles.textHeading} fontWeight="bold">
                    Home
                </Text>
                <Text className={styles.textHeading} >
                    Stories
                </Text>
                <Box display="flex" className={`${styles.boxMore}  ${styles.textActive}`} alignItems="center">
                    <Text className={styles.textHeading} >
                        Library
                    </Text>
                    <Box className={styles.textMore}>
                        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flex="50%" >
                            <Box ml="24px">
                                <Text className={styles.textHeadingHover}  >
                                    Acquire Users
                                </Text>
                                <Text>
                                    Work with the tools and services you use.
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flex="50%">
                            <Box ml="24px">
                                <Text className={styles.textHeadingHover}  >
                                    Acquire Users
                                </Text>
                                <Text>
                                    Work with the tools and services you use.
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flex="50%">
                            <Box ml="24px">
                                <Text className={styles.textHeadingHover}  >
                                    Acquire Users
                                </Text>
                                <Text>
                                    Work with the tools and services you use.
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flex="50%">
                            <Box ml="24px">
                                <Text className={styles.textHeadingHover}  >
                                    Acquire Users
                                </Text>
                                <Text>
                                    Work with the tools and services you use.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <FaCaretDown />
                </Box>
                < MyButton body={"Get Started"} color={true} />
            </HStack>
        </HStack>
    )
}

export default Header

