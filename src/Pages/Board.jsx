import { SimpleGrid} from "@chakra-ui/react"
import { StatusCard } from "../Components/dialog/StatusCard"


export const Board = () => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
      <StatusCard status="1"/>
      <StatusCard status="2"/>
      <StatusCard status="3"/>
      <StatusCard status="4"/>
    </SimpleGrid>
  )
}

