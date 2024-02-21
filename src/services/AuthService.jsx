const AuthService = {
    async login(username, password) {
      const response = await fetch('http://localhost:7777/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username" : username, "password" : password }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
          localStorage.setItem('jwt', data.token);
        return true;
      } else {
        return false;
      }
    },

    async signup(username, email, password) {
      const response = await fetch('http://localhost:7777/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username": username, "password": password, "email": email }),
    });
  
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
          localStorage.setItem('jwt', data.token);
        return true;
      } else {
        return false;
      }
    },
  
    logout() {
      localStorage.removeItem('jwt');
    },
  };
  
  export default AuthService;
  