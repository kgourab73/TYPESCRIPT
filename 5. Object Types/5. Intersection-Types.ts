type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const kirti: User = {
  first: "Kirti",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${kirti.first} ${kirti.last}) Age: (${kirti.age}) Email: (${kirti.email}) Password: (${kirti.password})`
);
