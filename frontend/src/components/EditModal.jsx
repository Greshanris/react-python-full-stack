import React from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Flex, Textarea, ModalFooter, IconButton } from '@chakra-ui/react'
import { BiEditAlt } from 'react-icons/bi'

const EditModal = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            Update
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

export default EditModal