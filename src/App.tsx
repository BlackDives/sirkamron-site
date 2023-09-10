import React from 'react'
import { Flex } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'

function App() {
    return (
        <Flex background='darkMode.background' width='100%'>
            <Flex flexDirection='column' marginX='auto' maxWidth='1536px'>
                <NavBar />
                <LandingPage />
            </Flex>
        </Flex>
    )
}

export default App
