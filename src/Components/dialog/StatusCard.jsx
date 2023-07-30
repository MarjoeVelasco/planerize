import {Card, CardBody, CardFooter, CardHeader, Heading, Text, Button } from "@chakra-ui/react"
import CardItem from "./CardItem"

export const StatusCard = ({status}) => {
  console.log(status)
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>{ status }</Heading>
      </CardHeader>
      <CardBody>
        <CardItem/>
      </CardBody>
      <CardFooter>
        <Button>Add a card</Button>
      </CardFooter>
    </Card>
  )
}
