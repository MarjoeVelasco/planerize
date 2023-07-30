import {Card ,CardBody, RadioGroup, Radio, Stack, Flex, Box, Heading, Spacer, useColorMode} from "@chakra-ui/react"
import { selectedStatusNum } from "../../helper/selectedStatusNum"


const CardItem = (props) => {
  const status = selectedStatusNum(props.status)

  return (
    <Card>
      <CardBody>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Spacer />
          <RadioGroup defaultValue={status}>
            <Stack spacing={2} direction='row'>
              <Radio size='sm' colorScheme='red' value='1'>
              </Radio>
              <Radio size='sm' colorScheme='blue' value='2'>
              </Radio>
              <Radio size='sm' colorScheme='green' value='3'>
              </Radio>
              <Radio size='sm' colorScheme='yellow' value='4'>
              </Radio>
            </Stack>
          </RadioGroup>
       
        </Flex>
        <Box>
          <Heading size='sm'>Card</Heading>
        </Box>
         
      </CardBody>
    </Card>
  )
}

export default CardItem