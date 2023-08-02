import { Card, CardBody, Flex, Spacer, Box, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, useColorMode, Text, Avatar, AvatarGroup, Progress, List, ListItem, ListIcon, Input, Stack} from "@chakra-ui/react"
import { selectedStatusNum } from "../../helper/selectedStatusNum"
import { selectedStatusName } from "../../helper/selectedStatusName"
import { ArrowRightIcon, AddIcon, HamburgerIcon, CheckCircleIcon, CheckIcon, CalendarIcon} from "@chakra-ui/icons"
import { RadioGroupItem } from "./RadioGroupItem"
import { commentBgColor, commentColorInput, textColorInput } from "../../helper/theme"

const CardItem = (props) => {
  const status = selectedStatusNum(props.status)
  const statusName = selectedStatusName(status)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode();

  return (
    <>
      <Card onClick={onOpen}>
        <CardBody>
          <RadioGroupItem status={status}/>
          <Box>
            <Heading size='sm'>Card</Heading>
          </Box>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems="center" pt="4">
              <Flex alignItems="center" gap="2" >
                <ArrowRightIcon boxSize={4}/>
                Card
              </Flex>
              <Spacer/>
              <RadioGroupItem status={status}/>
            </Flex>
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Button colorScheme={textColorInput[colorMode]} variant='link' gap={2}>
              <AddIcon boxSize={4} color="yellow.500"/> 
              <Text fontSize='md'>Add member</Text>
            </Button>
            <AvatarGroup size='sm' max={2} p="2">
              <Avatar name='Ryan Florence' bg='red.500'/>
              <Avatar name='Segun Adebayo' bg='teal.500' />
              <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </AvatarGroup>
            <Flex alignItems="center" gap="2" pt="2">
              <HamburgerIcon boxSize={4} color="yellow.500"/>
              <Text>Description</Text>
            </Flex>
            <Card>
              <CardBody>
                Something
              </CardBody>
            </Card>
            <Flex alignItems="center" gap="2" pt="2">
              <CheckIcon boxSize={4} color="yellow.500"/>
              <Text>{statusName}</Text>
            </Flex>
            <Card>
              <Box p="5" gap="2">
                <Progress value={80} colorScheme="orange"/>
                <List spacing={3} pt="5">
                  <ListItem>
                    <Flex alignItems="center" gap="2">
                      <CheckCircleIcon boxSize={4} color="green.500"/>
                      <Text>Task-003</Text>
                      <Text>07/31/2023</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex alignItems="center" gap="2">
                      <CheckCircleIcon boxSize={4} color="green.500"/>
                      <Text>Task-003</Text>
                      <Text>07/31/2023</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex alignItems="center" gap="2">
                      <CheckCircleIcon boxSize={4} color="red.500"/>
                      <Text>Task-003</Text>
                      <Text>07/31/2023</Text>
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </Card>
            <Flex alignItems="center" gap="2" pt="2">
              <CalendarIcon boxSize={4} color="yellow.500"/>
              <Text>Activity</Text>
            </Flex>
            <Flex alignItems="center" gap="2" pt="2" pb="5">
              <Avatar size='sm' name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
              <Input placeholder='Write something..' size='sm' bg={commentBgColor[colorMode]} color={commentColorInput[colorMode]} />
            </Flex>
            <Stack>
              <Flex alignItems="center" gap="2" pt="2" pb="2">
                <Avatar size='sm' name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
                <Text>Marjoe Velasco</Text>
                <Spacer/>
                <Text size="sm" color="gray">07/31/2023</Text>
              </Flex>
              <Box pl="10">
                <Card bg={commentBgColor[colorMode]} color={commentColorInput[colorMode]}>
                  <CardBody>
                    Wrote something...
                  </CardBody>
                </Card>
                <Flex pt="2">
                  <Spacer/>
                  <Button>Delete</Button>
                </Flex>
               
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button bg="black" color="#ffffff">Archive Card</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardItem