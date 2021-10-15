import React from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

function Questions() {
    return (
        <Box bg="#F4F5F7" padding="60px 0" >
            <Flex w="90%" m="0 auto">
                <Box w="48%">
                    <Heading fontSize="22px" fontWeight="bold" color="#2B292D" >
                        What is it about?
                    </Heading>
                    <Text>
                        Building a website for a startup that looks amazing is not a rocket science anymore.
                    </Text>
                </Box>
                <Spacer />
                <Box w="48%">
                    <Heading fontSize="22px" fontWeight="bold" color="#2B292D" >
                        What is it for?
                    </Heading>
                    <Text>
                        Startups, small companies and teams, entrepreneurs and web developers.
                    </Text>
                </Box>
            </Flex>
        </Box>

    )
}

export default Questions
