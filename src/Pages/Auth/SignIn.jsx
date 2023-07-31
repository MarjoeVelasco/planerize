import { Box, useColorMode, Container, Stack, Heading, FormControl, FormLabel, Input, Divider, Text, Button, Link } from '@chakra-ui/react'
import { Logo } from '../../Assets/Logo/Logo'
import { bgColor, bgColorInput, textColorInput } from '../../helper/theme';
import { loginApi } from '../../Services/api/auth';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { colorMode } = useColorMode();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Event handler for updating email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for updating password state
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(email, password);
      if(response.message === 'User login successful')
      {
        localStorage.setItem("token", response.token);
        navigate("/dashboard"); 
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <form onSubmit={handleLogin}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Box align="center"> {/* Wrap the Logo component in a Box and set align="center" */}
            <Logo width="75px" height="75px" />
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
              <Input id="email" name="email" type="email" value={email} onChange={handleEmailChange} bg={bgColorInput[colorMode]} color={textColorInput[colorMode]} required/>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" name="password" type="password" value={password} onChange={handlePasswordChange} bg={bgColorInput[colorMode]} color={textColorInput[colorMode]} required/>
            </FormControl>

           </Stack>
          <Divider />
          <Text color="fg.muted">
            Don't have an account? <Link href="/register">Sign up</Link>
          </Text>
          <Stack spacing="6">
            <Button type='submit'>Sign in</Button>
          </Stack>
        </Stack>
      </Stack>
      </form>
    </Container>
  );
};
