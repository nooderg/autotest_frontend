import { AxiosResponse } from 'axios';
import Api from '../helper/api';
import { IUser, IUserLogin, IUserRegister } from '../types/userTypes';

export default class UserService {
  private api: Api;

  constructor() {
    this.api = Api.getInstance();
  }

  register = (data: IUserRegister): Promise<AxiosResponse<IUser, Error>> => {
    return this.api.post('/users/register', data);
  };

  login = (data: IUserLogin): Promise<AxiosResponse<string, Error>> => {
    return this.api.post('/users/login', data);
  };

  get(id: string): Promise<AxiosResponse<IUser, Error>> {
    return this.api.get(`/users/${id}`);
  }

  getAll(): Promise<AxiosResponse<IUser[], Error>> {
    return this.api.get('/users');
  }

  update(id: string, data: IUser): Promise<AxiosResponse<IUser, Error>> {
    return this.api.post(`/users/${id}`, data);
  }
}
