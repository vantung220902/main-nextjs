import React from 'react'
import styles from './styles.module.css'
import { Heading, Text, Image, Box, Flex, Spacer } from '@chakra-ui/react'
import MyButton from '../../components/button'
function Body() {
    return (
        <Flex direction={['column', 'column', 'row', 'row']} className={styles.app}>
            <Box className={styles.left} width={['100%', '100%', '46%', '46%']} ml={['12px', '12px', '0', '0']}

            >
                <Heading fontSize="80" fontWeight="bold" mb="32px">
                    Build stunning websites & apps.
                </Heading>
                <Text variant="paragraph" fontSize="24" mb="48px" maxW="90%">
                    Create live segments and target the right people for messages based on their behaviors.
                </Text>
                <Box display="flex" flexDirection={['column', 'column', 'row', 'row']}  >
                    <MyButton color={true} body={"Get Started"} />

                    <MyButton body={"Learn More"} />
                </Box>
            </Box>
            <Spacer />
            <Box className={styles.right} width={['100%', '100%', '52%', '52%']}
                mr={['10px', '10px', '0', '0']}
            >
                <Image mt={['40px', '40px', '0', '0']} src="/images/ouch.png" alt="anh" w="100%" />
            </Box>
        </Flex>
    )
}

export default Body
