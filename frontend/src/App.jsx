import { Stack, Container, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserGrid from './components/UserGrid'
import { useState } from 'react'

export const BASE_URL = 'http://127.0.0.1:5000/api'

function App() {
  const [users, setUsers] = useState([])

  return (
    // Stack is a layout component that arranges its children in a vertical stack
    <Stack minH={'100vh'}>
      {/* Next time we will use redux, react context, recoil or zustand for it but since this a
      application is not massive and will not scale that high */}
      <Navbar setUsers={setUsers} />
      <Container maxW={"1200px"} my={4}>
        <Text
        fontSize={{base: "2xl", md: "50"}}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}
        >
          <Text
          as={"span"}
          bgGradient={"linear(to-r, red.400,pink.400,orange.400)"}
          bgClip={"text"}
          >
            My Friends
          </Text>
          🎇
        </Text>

        <UserGrid users={users} setUsers={setUsers}/>
      </Container>
    </Stack>
  )
}

export default App
