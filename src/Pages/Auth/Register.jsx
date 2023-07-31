import { Box, useColorMode, Container, Stack, Heading, FormControl, FormLabel, Input, Divider, Text, Button, Link } from '@chakra-ui/react';
import { Logo } from '../../Assets/Logo/Logo';
import { bgColor, bgColorInput, textColorInput } from '../../helper/theme';
import { useState } from "react";
import { registerApi } from '../../Services/api/auth';

export const Register = () => {
  const { colorMode } = useColorMode();

  const [serverResponse, setServerResponse] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleRegister = async (e) => {
    e.preventDefault();
     // Check if password and confirm password match
     if (formData.password !== formData.password_confirm) {
      setServerResponse('Passwords do not match.');
      return;
    }

    try {
      const response = await registerApi(formData);
      setServerResponse(response.message);
    } catch (error) {
      //console.error('Registration Failed:', error);
      setServerResponse('Registration Failed. Please try again later.');
    }
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Box align="center">
            <Logo width="75px" height="75px" />
          </Box>

          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'lg' }}>PLANERIZE</Heading>
            <Heading size={{ base: 'xs' }}>Register</Heading> {/* Update the heading */}
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
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" 
              value={formData.name}
              onChange={handleInputChange}
              type="text" bg={bgColorInput[colorMode]} color={textColorInput[colorMode]} required/>

            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" name="email" 
              value={formData.email}
              onChange={handleInputChange}
              type="email" bg={bgColorInput[colorMode]} color={textColorInput[colorMode]} required/>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" name="password" 
              value={formData.password}
              onChange={handleInputChange}
              type="password" bg={bgColorInput[colorMode]} color={textColorInput[colorMode]} required/>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <Input id="password_confirm" name="password_confirm" 
              value={formData.password_confirm}
              onChange={handleInputChange}
              type="password" bg={bgColorInput[colorMode]} color={textColorInput[colorMode]} required/>
            </FormControl>
          </Stack>
          <Divider />
          {serverResponse && (
            <Box textAlign="center" bg={serverResponse.includes('success') ? 'green.50' : 'red.50'} p={2} borderRadius="md">
              <Text color={serverResponse.includes('success') ? 'green.500' : 'red.500'}>{serverResponse}</Text>
            </Box>
          )}
          <Text color="fg.muted">
            Already have an account? <Link href="/">Sign in</Link> {/* Update the link text and route */}
          </Text>
          <Stack spacing="6">
            <Button onClick={handleRegister}>Register</Button> {/* Add onClick event for form submission */}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
