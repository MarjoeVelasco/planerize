import { Heading, Box, Flex, Avatar, Text, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode, Center } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Logo } from '../../Assets/Logo/Logo';
import { useNavigate } from "react-router-dom";

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box as="a" px={2} py={1} rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.100', 'gray.900'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

const Nav = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <>
      <Box  bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex align="center">
        </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <FaMoon /> : <FaSun />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <a onClick={handleLogout}><MenuItem>Logout</MenuItem></a>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
