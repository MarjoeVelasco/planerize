
import { RadioGroup, Radio, Stack, Flex, Spacer } from "@chakra-ui/react"

export const RadioGroupItem = ({status}) => {
  return (
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
  )
}

