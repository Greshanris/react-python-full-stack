import { Box, Container, Flex, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
import CreateUserModel from './CreateUserModel'

function Navbar({setUsers}) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={"900px"}>
        {/* Like a Div bar */}
        <Box
        px={10}
        py={2}
        border={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.600")}
        borderRadius={5}
        boxShadow={'md'}
        bg={useColorModeValue("gray.100", "gray.700")}
        >
            <Flex h="16"
            alignItems={'center'}
            justifyContent={'space-between'}
            >
                {/* Left Side */}
                <Flex
                alignItems={'center'}
                justifyContent={"center"}
                gap={3}
                display={{base:"none", sm: "flex"}}
                >
                    <img src="/react.png" alt="react logo" width={50} height={50} />
                    <Text fontSize={"40px"}>+</Text>
                    <img src="/python.png" alt="python logo" width={50} height={40} />
                    <Text fontSize={"40px"}>=</Text>
                    <img src="/crud.png" alt="crud logo" width={45} height={45} />
                </Flex>
                {/* Right Side */}
                <Flex gap={3} alignItems={'center'}>
                    <Text fontSize={"lg"} fontWeight={"bold"} display={{base:"none", md: "block"}}>
                      Friend list: Todo 📃
                    </Text>

                    {/*Dark and light mode */}
                    <Button onClick={toggleColorMode}>
                      {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                    </Button>
                    <CreateUserModel setUsers={setUsers} />
                </Flex>
            </Flex>
        </Box>
    </Container>
  )
}

export default Navbar
