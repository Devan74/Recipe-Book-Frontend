// Function to get authentication token from localStorage
export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  // Function to set authentication token in localStorage
  export const setToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  // Function to remove authentication token from localStorage
  export const removeToken = () => {
    localStorage.removeItem('authToken');
  };
  
  // Function to check if the user is authenticated
  export const isAuthenticated = () => {
    const token = getToken();
    // You may need to add additional checks based on your authentication logic
    return token !== null && token !== 'undefined';
  };
  