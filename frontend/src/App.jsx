import { Stack, Container, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserGrid from './components/UserGrid'

function App() {

  return (
    // Stack is a layout component that arranges its children in a vertical stack
    <Stack minH={'100vh'}>
      <Navbar />
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

        <UserGrid />
      </Container>
    </Stack>
  )
}

export default App
