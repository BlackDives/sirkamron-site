import React from 'react'
import { Button, Flex, Text, Center } from '@chakra-ui/react'

const LandingPage = () => {
    return (
        <Flex
            height='100vh'
            backgroundColor='darkMode.background'
            paddingY={10}
        >
            <Flex flexDirection='column'>
                <Flex flexDirection='column' marginBottom={5}>
                    <Text
                        color='darkMode.text'
                        fontSize='6xl'
                        fontWeight='semibold'
                    >
                        Hello, I'm Kam
                    </Text>
                    <Text
                        color='darkMode.text'
                        fontSize='6xl'
                        fontWeight='semibold'
                    >
                        A Software Engineer
                    </Text>
                </Flex>
                <Flex width='50%' marginBottom={5}>
                    <Text color='darkMode.secondary'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla eget ante aliquam, laoreet quam eget, malesuada
                        nisi. Morbi luctus eleifend velit, nec viverra odio
                        eleifend quis. Sed tristique porta neque, eu varius nibh
                        aliquet et. Nulla facilisi. Etiam facilisis mi at ante
                        consectetur, nec ullamcorper lectus vehicula. Duis
                        sollicitudin ipsum eu risus rhoncus rhoncus. Integer
                        elementum sem vitae aliquet rutrum. Suspendisse sed
                        pulvinar nisl, mattis vulputate urna.
                    </Text>
                </Flex>
                <Flex>
                    <Button
                        width='20%'
                        paddingY={7}
                        backgroundColor='darkMode.accent'
                        color='darkMode.text'
                    >
                        View More
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default LandingPage
