import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header(){
    return (
        <>
        <Box pb='112px'>
        <Box bg="#6B46C1" textAlign='center' color='white'>
            <Heading pt='88px' pb='16px' fontSize='48px'>Simple pricing for your business</Heading>
            <Text pb='188px' fontSize='24px'>Plans that are carefully crafted to suit your business.</Text>
        </Box>
        </Box>
        </>
    )
}