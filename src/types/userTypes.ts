export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: {
    secs_since_epoch: number;
    nanos_since_epoch: number;
  };
}

export interface IUserRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
