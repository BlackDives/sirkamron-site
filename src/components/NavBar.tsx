import React from 'react'
import { Flex, ListItem, UnorderedList, Link } from '@chakra-ui/react'

type LinkType = {
    id: number
    title: string
    path: string
}

const Links: LinkType[] = [
    { id: 1, title: 'Home', path: '#' },
    { id: 2, title: 'About Me', path: '#' },
    { id: 3, title: 'Experience', path: '#' },
    { id: 4, title: 'Contact', path: '#' },
]

const NavBar = () => {
    return (
        <Flex backgroundColor='darkMode.background' width='100%' height='100px'>
            <UnorderedList
                display='flex'
                width='100%'
                height='100%'
                justifyContent='center'
                alignItems='center'
                listStyleType='none'
            >
                {Links.map((data) => (
                    <ListItem px={5}>
                        <Link
                            color='darkMode.text'
                            fontSize='xl'
                            textDecoration='none'
                            fontWeight='semibold'
                        >
                            {data.title}
                        </Link>
                    </ListItem>
                ))}
            </UnorderedList>
        </Flex>
    )
}

export default NavBar
