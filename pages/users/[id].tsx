import Layout from "../../components/Layout";


interface User {
  name: string;
  email: string;
  phone: string;
  id: number;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="Detail User">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </Layout>

  );
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  const paths = dataUsers.map((user: User) => {
    return {
      params: {
        id: `${user.id}`
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

interface GetStaticProps {
  params: {
    id: string;
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await response.json();
  return {
    props: {
      user,
    }
  }
}
