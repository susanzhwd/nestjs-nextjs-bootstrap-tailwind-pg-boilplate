export type UserCreate = {
  name: { first: string; last: string };
  username: string;
  email: string;
  passward: string;
};

export type User = {
  name: { first: string; last: string };
  username: string;
  email: string;
};
