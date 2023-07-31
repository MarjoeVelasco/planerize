import { useState, useEffect } from 'react';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const GridWithCards = () => {
  const [workspaces, setWorkspaces] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await fetch('/api/workspaces'); // Replace with the actual API endpoint
        const data = await response.json();
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
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              _hover={{ cursor: 'pointer', bg: 'gray.100' }}
            >
              <Text fontSize="lg" fontWeight="bold">
                {workspace.title}
              </Text>
              <Text mt={2}>{workspace.content}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GridWithCards;
