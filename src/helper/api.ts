import axios, { AxiosInstance } from "axios";
import Cookies from 'js-cookie';

export default class Api {

  private static instance: Api;

  private api_token: string;
  private api_url: string;
  private client: AxiosInstance;

  constructor() {
    this.api_token = Cookies.get('api_token') ?? "";
    this.api_url = process.env.REACT_APP_API_URL ?? "";

    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  setApiToken(api_token: string) {
    this.api_token = api_token;
    this.client.defaults.headers.post['Authorization'] = `Bearer ${this.api_token}`;
  }

  removeApiToken() {
    this.api_token = "";
    this.client.defaults.headers.post['Authorization'] = `Bearer ${this.api_token}`;
  }

  post = (url: string, data: any) => {
    return this.client.post(url, data);
  }

  get = (url: string) => {
    return this.client.get(url);
  }
}
