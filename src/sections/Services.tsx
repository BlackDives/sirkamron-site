import React from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'
import {
    FaGithub,
    FaRegWindowMaximize,
    FaMobileAlt,
    FaDatabase,
    FaCloudDownloadAlt,
    FaPenAlt,
} from 'react-icons/fa'
import SkillBox from '../components/SkillBox'

const SkillSet = [
    {
        id: 1,
        icon: FaRegWindowMaximize,
        title: 'Web Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla eget ante aliquam, laoreet quam eget, malesuada nisi. Morbi luctus eleifend velit, nec viverra odio eleifend quis.',
    },
    {
        id: 2,
        icon: FaMobileAlt,
        title: 'Mobile Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla eget ante aliquam, laoreet quam eget, malesuada nisi. Morbi luctus eleifend velit, nec viverra odio eleifend quis.',
    },
    {
        id: 3,
        icon: FaDatabase,
        title: 'Full-Stack Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla eget ante aliquam, laoreet quam eget, malesuada nisi. Morbi luctus eleifend velit, nec viverra odio eleifend quis.',
    },
    {
        id: 4,
        icon: FaCloudDownloadAlt,
        title: 'Cloud Skills',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla eget ante aliquam, laoreet quam eget, malesuada nisi. Morbi luctus eleifend velit, nec viverra odio eleifend quis.',
    },
    {
        id: 5,
        icon: FaPenAlt,
        title: 'System Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla eget ante aliquam, laoreet quam eget, malesuada nisi. Morbi luctus eleifend velit, nec viverra odio eleifend quis.',
    },
    {
        id: 6,
        icon: FaGithub,
        title: 'Git Version Control',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla eget ante aliquam, laoreet quam eget, malesuada nisi. Morbi luctus eleifend velit, nec viverra odio eleifend quis.',
    },
]

const Services = () => {
    return (
        <Flex
            backgroundColor='darkMode.background'
            flexDirection='column'
            minHeight='100vh'
            paddingY={10}
            paddingX={10}
        >
            <Flex>
                <Text color='darkMode.text' fontSize='2xl'>
                    Services
                </Text>
            </Flex>
            <Flex>
                <Text color='darkMode.primary' fontSize='6xl' fontWeight='bold'>
                    Skill-Set
                </Text>
            </Flex>
            <Flex
                width='100%'
                flexDirection='column'
                alignItems='center'
                height='60%'
            >
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    justifyContent='center'
                    alignItems='center'
                    width='100%'
                    height='100%'
                    gap={5}
                >
                    {SkillSet.map((data) => (
                        <SkillBox
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            iconName={data.icon}
                        />
                    ))}
                </Grid>
            </Flex>
        </Flex>
    )
}

export default Services
