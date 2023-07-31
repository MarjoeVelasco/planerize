const BASE_URL = `http://127.0.0.1:3000/v1/auth`;

export const loginApi = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    
  } catch (error) {
    throw new Error ('Login Failed');
  }
}

export const registerApi = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData),
    })
      const data = await response.json();
      return data;
  } catch (error) {
    throw new Error ('Register Failed');
  }
}