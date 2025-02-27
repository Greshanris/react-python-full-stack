import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Flex, Textarea, RadioGroup, Radio, ModalFooter, useToast } from '@chakra-ui/react'
import { BiAddToQueue } from 'react-icons/bi'
import { BASE_URL } from '../App'

const CreateUserModel = ({ setUsers }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        role: '',
        description: '',
        gender: "",
    })

    const toast = useToast();

    // handleCreateUser function
    const handleCreateUser = async (e) => {
        e.preventDefault(); // prevents the refresh
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL + "/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputs),
            })

            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.error || 'Something went wrong!')
            }

            toast({
                status: 'success',
                title: "Yesss!! 🥳🍾",
                description: "Your friend has been added successfully.",
                duration:2000,
                position: "top-center",
            })

            onClose(); // close the modal
            setUsers((prevUsers) => [...prevUsers, data]);

            setInputs({
                name: '',
                role: '',
                description: '',
                gender: '',
            }); // to clear the inputs
        } catch (error) {
            toast({
                status: 'error',
                title: "Oops! 🙈",
                description: error.message,
                duration: 2000,
                position: "top-center",
            }) 
            } finally {
                setIsLoading(false);
        }
    }

    return (
        <>
            <Button onClick={onOpen}>
                <BiAddToQueue size={20} />
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleCreateUser}>
                    <ModalContent>
                        <ModalHeader> ➕ Add New Friend </ModalHeader>
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
                                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input placeholder='Student'
                                        value={inputs.role}
                                        onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
                                    />
                                </FormControl>
                            </Flex>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflow={"hidden"}
                                    placeholder='I am a student studying Information Technology who loves diving into different fields.'
                                    value={inputs.description}
                                    onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                                />
                            </FormControl>

                            <RadioGroup mt={4}>
                                <Flex gap={5}>
                                    <Radio value='male'
                                        onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                    >Male</Radio>
                                    <Radio value='female'
                                        onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                    >Female</Radio>
                                </Flex>
                            </RadioGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type='submit'
                            isLoading={isLoading}
                            >
                                Save
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

export default CreateUserModel