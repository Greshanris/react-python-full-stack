import React from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Flex, Textarea, RadioGroup, Radio, ModalFooter } from '@chakra-ui/react'
import { BiAddToQueue } from 'react-icons/bi'

const CreateUserModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                                <Input placeholder='Rishav Chaudhary' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Input placeholder='Student' />
                            </FormControl>
                        </Flex>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                resize={"none"}
                                overflow={"hidden"}
                                placeholder='I am a student studying Information Technology who loves diving into different fields.
                        ' />
                        </FormControl>

                        <RadioGroup defaultValue='male' mt={4}>
                            <Flex gap={5}>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                            </Flex>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateUserModel