const BASE_URL = `http://127.0.0.1:3000/v1/workspace`;

export const getWorkspaces = async () => {
  try {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    const response = await fetch(`${BASE_URL}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
      },
    })

    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 401) {
      throw new Error('Unauthorized');
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error('Error fetching workspaces:', error.message);
    throw new Error('Failed to fetch workspaces');
  }
}