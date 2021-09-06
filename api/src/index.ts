import express from 'express';

interface IUser {
  id: number;
  name: string;
  email: string;
}

// 仮想DB
const users: IUser[] = [];

// 初期データ投入
const user1: IUser = {
  id: 1,
  name: 'ココア',
  email: 'cocoa@example.com',
};
const user2: IUser = {
  id: 2,
  name: 'チノ',
  email: 'chino@example.com',
};
const user3: IUser = {
  id: 3,
  name: 'リゼ',
  email: 'rize@example.com',
};
const user4: IUser = {
  id: 4,
  name: '千夜',
  email: 'chiya@example.com',
};
const user5: IUser = {
  id: 5,
  name: 'シャロ',
  email: 'syaro@example.com',
}
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/users', (_, res) => {
  res.status(200).json({ 'users': users });
});

app.listen(3080, () => console.log('Server is running...'));
