import React, {useState} from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Flex, Textarea, ModalFooter, IconButton, useToast } from '@chakra-ui/react'
import { BiEditAlt } from 'react-icons/bi'
import { BASE_URL } from '../App'

const EditModal = ({ user, setUsers }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = React.useState(false)
    const [inputs, setInputs] = useState({
        name: user.name,
        role: user.role,
        description: user.description
    })

    const toast = useToast()

    const handleEditUser = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL + "/friends/" + user.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong!')
            }
            setUsers((prevUsers) => prevUsers.map((u) => u.id === user.id ? data : u))
            toast({
                status: "success",
                title: "Whoa! 🎉, Friend updated successfully.",
                duration: 2000,
                position: "top-center",
            })
            onClose();
        } catch (error) {
            toast({
                status: "error",
                title: "An error occurred.",
                description: error.message,
                duration: 4000,
                position: "top-center",
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <IconButton
                onClick={onOpen}
                variant='ghost'
                colorScheme='blue'
                aria-label='Edit'
                size={'sm'}
                icon={<BiEditAlt size={20} />}
            />

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleEditUser}>
                    <ModalContent>
                        <ModalHeader> 📃Edit Friend list</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody
                            pb={6}
                        >
                            <Flex
                                alignItems={"center"}
                                gap={4}
                            >
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input placeholder='Rishav Chaudhary'
                                    value={inputs.name}
                                    onChange={(e) => setInputs((prev) => ({...prev, name: e.target.value}))}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input placeholder='Student' 
                                    value={inputs.role}
                                    onChange={(e) => setInputs((prev) => ({...prev, role: e.target.value}))}
                                    />
                                </FormControl>
                            </Flex>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflow={"hidden"}
                                    placeholder='I am a student studying Information Technology who loves diving into different fields.' 
                                    onChange={(e) => setInputs((prev) => ({...prev, description: e.target.value}))} 
                                />
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='green' mr={3}
                            type='submit'
                            isLoading={isLoading}
                            >
                                Update
                            </Button>
                            <Button onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export default EditModal