import React from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

function Questions() {
    return (
        <Box bg="#F4F5F7" w="100%" padding="60px 0" >
            <Flex w="90%" m="0 auto" direction={['column', 'column', 'row', 'row']}>
                <Box width={['100%', '100%', '48%', '48%']} mb="12px">
                    <Heading fontSize="22px" fontWeight="bold" color="#2B292D" >
                        <div data-aos="fade-right"> What is it about?</div>
                    </Heading>
                    <Text>
                        <div data-aos="fade-left">  Building a website for a startup that looks amazing is not a rocket science anymore.</div>
                    </Text>
                </Box>
                <Spacer />
                <Box width={['100%', '100%', '48%', '48%']} mb="12px">
                    <Heading fontSize="22px" fontWeight="bold" color="#2B292D" >
                        <div data-aos="fade-right">
                            What is it for?
                        </div>
                    </Heading>
                    <Text>
                        <div data-aos="fade-left">
                            Startups, small companies and teams, entrepreneurs and web developers.
                        </div>
                    </Text>
                </Box>
            </Flex>
        </Box>

    )
}

export default Questions
