const BASE_URL = '/v1/auth';

export const loginApi = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ email, password }),
    })

    if(response.ok) {
      const data = await response.json();
      const token = data.token;
      return token;
    }
  } catch (error) {
    throw new Error ('Login Failed');
  }


}