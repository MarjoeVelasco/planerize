const BASE_URL = `${process.env.API_BASE_URL}/v1/auth`;

export const loginApi = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      return token;
    }
    
  } catch (error) {
    throw new Error ('Login Failed');
  }
}

export const registerApi = async (name, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ name, email, password }),
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error ('Register Failed');
  }
}