class AuthenticationController {
    constructor() {
        this.fetcher = fetcherObject;
        this.loadDOM();
    }

    loadDOM() {
        const formLogin = document.querySelector('#form-login');
        formLogin.addEventListener('submit', this.login.bind(this));
    }

    login(e) {
        e.preventDefault();

        const email = e.target['email'].value;
        const password = e.target['password'].value;
        const data = { email, password };
        this.fetcher
            .login(data)
            .then(result => {
                localStorage.setItem('tokenProDigi', result.id);
                e.target.submit();
            })
            .catch(error => console.log(error));
    }

    getToken() {
        const token = localStorage.getItem('tokenProDigi');
        return token ? token : null;
    }
}
