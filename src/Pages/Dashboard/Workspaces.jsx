import { useState, useEffect } from 'react';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { getWorkspaces } from '../../Services/api/workspace';

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await getWorkspaces(); // Replace with the actual API endpoint
        const data = await response;
        console.log(data);
        setWorkspaces(data);
      } catch (error) {
        console.error('Failed to fetch workspaces', error);
      }
    };

    fetchWorkspaces();
  }, []);

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {workspaces.map((workspace) => (
          <Link key={workspace._id} to={`/workspace/${workspace._id}`}>
            <Box bgColor='#086F83'
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              _hover={{ cursor: 'pointer', bg: 'gray.100' }}
            >
              <Text fontSize="lg" fontWeight="bold">
                {workspace.title}
              </Text>
              <Text mt={2}>{workspace.description}</Text>
            </Box>
          </Link>
        ))}
        
          <Link>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              _hover={{ cursor: 'pointer', bg: 'gray.100' }}
            >
              <Text fontSize="lg" fontWeight="bold">
                Add new Workspace
              </Text>
              <Text mt={2}></Text>
            </Box>
          </Link>

      </SimpleGrid>
    </Box>
  );
};

export default Workspaces;
