import React, { useEffect, useState } from 'react'
import { Flex, Grid, Spinner, Text } from '@chakra-ui/react'
import UserCard from './UserCard'
import { BASE_URL } from '../App'

const UserGrid = ({ users, setUsers }) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(BASE_URL + '/friends')
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Something went wrong!')
        }
        setUsers(data);
      } catch (error) {
        console.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    getUsers();
  }, [setUsers])

  console.log(users)
  return (
    <>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers}/>
        ))}
      </Grid>

      {isLoading && (
        <Flex justify="center">
          <Spinner size={"xl"} />
        </Flex>
      )}

      {!isLoading && users.length === 0 && (
        <Flex justifyContent="center">
          <Text fontSize="xl" fontWeight="bold" letterSpacing="2px" textTransform="uppercase" textAlign="center" mb={8}>
            oops! 🙈
          </Text>
          <h1>No Friends found in Database.</h1>
        </Flex>
        )}
      </>
      )
      }

export default UserGrid