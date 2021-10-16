import React from 'react'
import { Box, Image, Text, Flex, Spacer, Heading } from '@chakra-ui/react'
import styleC from '../css/common.module.css'
import MyButton from '../button'
function PageFour() {
    return (
        <Box>
            <Flex className={styleC.layout} direction={['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']} p="100px 0 118px">
                <Box width={['100%', '100%', '43%', '43%']} mt="22px">
                    <Image src={"/images/anh34.png"} alt="anh" />
                    <Text>
                        A better way to acquire new users
                    </Text>
                </Box>
                <Spacer />
                <Box width={['100%', '100%', '45%', '45%']}>
                    <Text className={styleC.textSmall} lineHeight="34px" mb="18px" color="#0189D1" >
                        Communicate Better
                    </Text>
                    <Heading fontSize="56px" lineHeight="56px" mb="28px" letterSpacing="-0.5px"
                        fontWeight="bold" color="#2B292D">
                        Built for busy small teams
                    </Heading>
                    <Text fontSize="24px" lineHeight="34px" mb="28px" color="##2B292D" fontWeight="400">
                        Three products that can be used independently or combined together for your company’s needs.
                    </Text>
                    <MyButton body={"Get Started"} color={true} />
                </Box>
            </Flex>
            <Flex className={styleC.layout} direction={['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']}>
                <Box width={['100%', '100%', '26%', '26%']} mb="12px">
                    <Text fontSize="18px" lineHeight="26px">
                        <b>Subscriptions</b>. Foundation works with the tools and services you already use every day.
                    </Text>
                    <Text color="#3040C4" fontWeight="bold">
                        Learn more about subscriptions
                    </Text>
                </Box>
                <Spacer />
                <Box width={['100%', '100%', '26%', '26%']} mb="12px">
                    <Text fontSize="18px" lineHeight="26px">
                        <b>Subscriptions</b>. Foundation works with the tools and services you already use every day.
                    </Text>
                    <Text color="#3040C4" fontWeight="bold">
                        Learn more about subscriptions
                    </Text>
                </Box>
                <Spacer />
                <Box width={['100%', '100%', '26%', '26%']} mb="12px">
                    <Text fontSize="18px" lineHeight="26px">
                        <b>Subscriptions</b>. Foundation works with the tools and services you already use every day.
                    </Text>
                    <Text color="#3040C4" fontWeight="bold">
                        Learn more about subscriptions
                    </Text>
                </Box>

            </Flex>
        </Box>
    )
}

export default PageFour
