import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import EditModal from './EditModal'
import { USERS } from '../lib/sample/sample'

const UserCard = ({ user }) => {
    return (
        <Card>
            <CardHeader>
                <Flex gap={4}>
                    {/*left side: avatar, usernames, userroles*/}
                    <Flex flex={"1"} gap={'4'} alignItems={"center"}>
                        <Avatar src='https://avatar.iran.liara.run/public' />
                        <Box>
                            <Heading size={'sm'}>{user.name}</Heading>
                            <Text>{user.role}</Text>
                        </Box>
                    </Flex>

                    {/*right side:buttons */}
                    <Flex>
                        <EditModal user={USERS} />
                        <IconButton
                            variant={'ghost'}
                            colorScheme={'red'}
                            size={'sm'}
                            aria-label='See menu'
                            icon={<BiTrash size={20} />}
                        />
                    </Flex>
                </Flex>
            </CardHeader>

            <CardBody>
                <Text>{user.description}</Text>
            </CardBody>
        </Card>
    )
}

export default UserCard