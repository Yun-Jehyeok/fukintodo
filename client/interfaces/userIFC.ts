export interface userIFC {
  name: string;
  email: string;
  id: string;
  token: string;
}

export interface signupIFC {
  name: string;
  email: string;
  password: string;
}

export interface signinIFC {
  email: string;
  password: string;
}
