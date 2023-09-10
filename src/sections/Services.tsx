import React from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import SkillBox from '../components/SkillBox'
import GitHub from '../assets/icons/github.svg'

const Services = () => {
    return (
        <Flex
            backgroundColor='darkMode.background'
            flexDirection='column'
            height='100vh'
        >
            <Flex>
                <Text color='darkMode.text' fontSize='2xl'>
                    Services
                </Text>
            </Flex>
            <Flex>
                <Text color='darkMode.primary' fontSize='6xl'>
                    Skill-Set
                </Text>
            </Flex>
            <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
            >
                <SkillBox
                    iconName={FaGithub}
                    title='Git Version Control'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla eget ante aliquam, laoreet quam eget, malesuada nisi.
                    Morbi luctus eleifend velit, nec viverra odio eleifend quis.'
                />
                <SkillBox
                    iconName={FaGithub}
                    title='Git Version Control'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla eget ante aliquam, laoreet quam eget, malesuada nisi.
                    Morbi luctus eleifend velit, nec viverra odio eleifend quis.'
                />
                <SkillBox
                    iconName={FaGithub}
                    title='Git Version Control'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla eget ante aliquam, laoreet quam eget, malesuada nisi.
                    Morbi luctus eleifend velit, nec viverra odio eleifend quis.'
                />
                <SkillBox
                    iconName={FaGithub}
                    title='Git Version Control'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla eget ante aliquam, laoreet quam eget, malesuada nisi.
                    Morbi luctus eleifend velit, nec viverra odio eleifend quis.'
                />
                <SkillBox
                    iconName={FaGithub}
                    title='Git Version Control'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla eget ante aliquam, laoreet quam eget, malesuada nisi.
                    Morbi luctus eleifend velit, nec viverra odio eleifend quis.'
                />
                <SkillBox
                    iconName={FaGithub}
                    title='Git Version Control'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla eget ante aliquam, laoreet quam eget, malesuada nisi.
                    Morbi luctus eleifend velit, nec viverra odio eleifend quis.'
                />
            </Grid>
        </Flex>
    )
}

export default Services
