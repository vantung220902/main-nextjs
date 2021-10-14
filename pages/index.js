import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { VStack, HStack, Box, Text } from "@chakra-ui/react"
import { FaHome, FaCaretDown } from "react-icons/fa"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container} >
        <VStack className={styles.homePage} w="100%" p="0" m="0" h="100px" bg="#F3C6BD">
          <HStack className={styles.header} w="80vw" h="auto" m="20px auto">
            <Box display="flex" alignItems="center">
              <Box display="flex" justifyContent="center" mr="2" alignItems="center" className={styles.itemIcon}>
                <FaHome className={styles.logo} />
              </Box>
              <Box direction="column" alignItems="center">
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
              <button className={styles.btn} >Get Started</button>
            </HStack>
          </HStack>
        </VStack>
      </div>
    </div>
  )
}
