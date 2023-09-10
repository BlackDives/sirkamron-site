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
            height='200px'
            width='200px'
            border='2px solid white'
        >
            <Flex>
                <Icon as={iconName} />
            </Flex>
            <Flex>
                <Text>{title}</Text>
            </Flex>
            <Flex>
                <Text>{description}</Text>
            </Flex>
        </Flex>
    )
}

export default SkillBox
