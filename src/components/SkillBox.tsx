import React from 'react'
import { Flex, Text, Icon } from '@chakra-ui/react'

type SkillBoxProps = {
    iconName: any
    title: string
    description: string
}

const SkillBox = (props: SkillBoxProps) => {
    const { iconName, title, description } = props
    return (
        <Flex
            flexDirection='column'
            backgroundColor='darkMode.elevation'
            height='100%'
            width='100%'
            paddingX={7}
            paddingY={10}
            borderRadius={5}
        >
            <Flex marginBottom={5}>
                <Icon as={iconName} boxSize={20} color='darkMode.primary' />
            </Flex>
            <Flex marginBottom={5}>
                <Text
                    color='darkMode.text'
                    fontSize='3xl'
                    fontWeight='semibold'
                >
                    {title}
                </Text>
            </Flex>
            <Flex>
                <Text color='darkMode.text' fontSize='lg'>
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}

export default SkillBox
