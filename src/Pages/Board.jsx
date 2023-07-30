import { SimpleGrid} from "@chakra-ui/react"
import { StatusCard } from "../Components/dialog/StatusCard"


export const Board = () => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <StatusCard status="To do"/>
      <StatusCard status="In Progress"/>
      <StatusCard status="In Review"/>
      <StatusCard status="Completed"/>
    </SimpleGrid>
  )
}

