import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

const LandingPage = () => {
    return (
        <Flex
            height='100vh'
            backgroundColor='darkMode.background'
            paddingY={10}
            paddingX={[20]}
        >
            <Flex flexDirection='column'>
                <Flex flexDirection='column' marginBottom={5}>
                    <Text
                        color='darkMode.primary'
                        fontSize='6xl'
                        fontWeight='semibold'
                    >
                        Hello, I'm Kam
                    </Text>
                    <Text
                        color='darkMode.primary'
                        fontSize='6xl'
                        fontWeight='semibold'
                    >
                        A Software Engineer
                    </Text>
                </Flex>
                <Flex width='50%' marginBottom={16}>
                    <Text color='darkMode.text'>
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
                        backgroundColor='darkMode.primary'
                        color='darkMode.text'
                    >
                        Get In Touch
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default LandingPage
