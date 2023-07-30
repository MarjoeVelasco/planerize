import {Card, CardBody, CardFooter, CardHeader, Heading, Text, Button, Grid, useColorMode } from "@chakra-ui/react"
import CardItem from "./CardItem"
import { selectedStatusName } from "../../helper/selectedStatusName"
import { AddIcon } from "@chakra-ui/icons"
import { cardBgColorInput, textColorInput } from "../../helper/theme"

export const StatusCard = (props) => {
  const status = selectedStatusName(props.status)
  const { colorMode } = useColorMode();

  return (
    <Card bg={cardBgColorInput[colorMode]} >
      <CardHeader>
        <Heading size='md' colorScheme={textColorInput[colorMode]}>{status}</Heading>
      </CardHeader>
      <CardBody>
        <Grid gap={2}>
          <CardItem status={status}/>
          <CardItem status={status}/>
        </Grid>
      </CardBody>
      <CardFooter>
        <Button colorScheme={textColorInput[colorMode]} variant='link' gap={2}>
          <AddIcon boxSize={4} color="yellow.500"/> 
          Add a card
        </Button>
      </CardFooter>
    </Card>
  )
}
