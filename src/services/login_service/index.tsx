import { IEUser, IELoginModel } from 'interfaces/login_service';

class LoginService {
  private name: string;
  private logged: boolean;

  constructor() {
    this.name = '';
    this.logged = false;
  }

  isLogged = (): boolean => {
    return this.logged;
  };

  getUser = (): IEUser => {
    return { name: this.name, logged: this.logged };
  };

  login = ({ user, password }: IELoginModel) => {
    this.name = 'Prueba';
    this.logged = true;
  };
}

let instance: any = null;

export default () => {
  function getInstance() {
    if (!instance) {
      instance = new LoginService();
    }
    return instance;
  }

  return {
    getInstance: getInstance,
  };
};
