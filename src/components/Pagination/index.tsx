import { Stack, Button, Box } from '@chakra-ui/react'
import { Paginationitem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Paginationitem number={1} isCurrent />
        <Paginationitem number={2} />
        <Paginationitem number={3} />
        <Paginationitem number={4} />
        <Paginationitem number={5} />
      </Stack>
    </Stack>
  )
}