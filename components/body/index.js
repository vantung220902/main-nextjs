import React from 'react'
import styles from './styles.module.css'
import { Heading, Text, Image, Box, Flex, Spacer } from '@chakra-ui/react'
import MyButton from '../../components/button'
function Body() {
    return (
        <Flex className={styles.app}>
            <Box className={styles.left} w="46%">
                <Heading fontSize="80" fontWeight="bold" mw="700" mb="32px">
                    Build stunning websites & apps.
                </Heading>
                <Text variant="paragraph" fontSize="24" mb="48px">
                    Create live segments and target the right people for messages based on their behaviors.
                </Text>
                <Box display="flex" >
                    <MyButton color={true} body={"Get Started"} />
                    <MyButton body={"Learn More"} />
                </Box>
            </Box>
            <Spacer />
            <Box className={styles.right} w="52%">
                <Image src="/images/ouch.png" alt="anh" w="100%" />
            </Box>
        </Flex>
    )
}

export default Body
