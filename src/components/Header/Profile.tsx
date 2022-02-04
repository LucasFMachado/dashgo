import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Machado</Text>
        <Text color="gray.300" fontSize="sm">
          lucas.fmachado19@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Lucas Machado" src="https://github.com/LucasFMachado.png" />
    </Flex>
  )
}