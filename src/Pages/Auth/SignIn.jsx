import { Box, useColorMode, Container, Stack, Heading, FormControl, FormLabel, Input, Divider, Text, Button, Link } from '@chakra-ui/react'
import { Logo } from '../../Assets/Logo/Logo'
import { PasswordField } from '../../Assets/Fields/PasswordField'

export const SignIn = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: '#F7FAFC', dark: '#2C7A7B' };
  const bgColorInput = { light: '#F7FAFC', dark: '#ffffff' };
  const textColorInput = { light: '#2C7A7B', dark: 'black' };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Box align="center"> {/* Wrap the Logo component in a Box and set align="center" */}
            <Logo />
          </Box>
          
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'lg' }}>PLANERIZE</Heading>
            <Heading size={{ base: 'xs' }}>Login</Heading> {/* Update the heading */}
          </Stack>
        </Stack>

        <Stack
          spacing="6"
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={bgColor[colorMode]}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" bg={bgColorInput[colorMode]} color={textColorInput[colorMode]}/>
            </FormControl>
            <PasswordField  bg={bgColorInput[colorMode]} color={textColorInput[colorMode]}/>
          </Stack>
          <Divider />
          <Text color="fg.muted">
            Don't have an account? <Link href="/register">Sign up</Link>
          </Text>
          <Stack spacing="6">
            <Button>Sign in</Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
