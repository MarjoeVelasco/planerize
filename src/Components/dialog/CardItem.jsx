import {Card ,CardBody, RadioGroup, Radio, Stack} from "@chakra-ui/react"

const CardItem = () => {
  return (
    <Card colorScheme='blue'>
      <CardBody>
          <RadioGroup defaultValue='2'>
          <Stack spacing={5} direction='row'>
            <Radio colorScheme='red' value='1'>
            </Radio>
            <Radio colorScheme='green' value='2'>
            </Radio>
          </Stack>
        </RadioGroup>
        Card 1
      </CardBody>
    </Card>
  )
}

export default CardItem