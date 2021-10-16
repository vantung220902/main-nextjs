import React from 'react'
import { HStack, Box, Text, Image } from "@chakra-ui/react"
import { FaCaretDown } from "react-icons/fa"
import styles from './styles.module.css'
import MyButton from '../button'
function Header() {
    return (
        <HStack className={styles.header} width={['100%', '100%', '90%', '90%']} h="auto" >
            <Box display="flex">
                <Image src={"/images/Icon.png"} alt="Icon" />
                <Box direction="column" mt="4px">
                    <Text color="Back" fontWeight="bold" mt={['14px', '14px', '0', '0']} fontSize="20">Foundation</Text>
                    <Text className={styles.text} fontSize="sm">Startup landing template</Text>
                </Box>
            </Box>
            <HStack display={['none', 'none', 'flex', 'flex']} className={styles.navBar} spacing="24px">
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
            <Box display={['flex', 'flex', 'none', 'none']} p="26px 30px" borderLeft="1px solid #ccc">
                <Image src={'/images/Shape.png'} alt="Shape" />
            </Box>
        </HStack>
    )
}

export default Header

