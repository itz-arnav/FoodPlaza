const AuthService = {
    async login(username, password) {
      const response = await fetch('https://localhost:3333/api/auth/login', {
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
  
    logout() {
      localStorage.removeItem('jwt');
    },
  };
  
  export default AuthService;
  