

const authProvider = {
    
    checkAuth: () => localStorage.getItem('auth') === 'dont_judge_my_authentication_this_is_not_an_authentication_ex@mple'
        ? Promise.resolve()
        : Promise.reject({ message: 'Login required' }),

    login: ({ username, password }) =>  {
        const request = new Request('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                
                return response.json();
            })
            .then(token => {
                
                localStorage.setItem('auth', token.auth);
               
              
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    }
};

export default authProvider;