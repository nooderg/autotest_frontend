import axios, { AxiosInstance } from "axios";
import Cookies from 'js-cookie';
import { ILoginForm, IRegisterForm } from "../types/formTypes";

export default class Api {
  api_token: string;
  api_url: string;
  client: AxiosInstance;

  constructor() {
    this.api_token = Cookies.get('api_token') ?? "";
    this.api_url = process.env.AUTOTEST_API_URL ?? "";
    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.api_token ? `Bearer ${this.api_token}` : "",
      }
    });
  }

  register = (data: IRegisterForm) => {
    return this.client.post("/register", data);
  };

  login = (data: ILoginForm) => {
    return this.client.post("/login", data);
  };
}
