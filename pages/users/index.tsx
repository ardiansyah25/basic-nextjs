import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from "./Users.module.css";


interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Page" >
      {dataUsers.map((user) => (
        <div className={styles.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)} >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  return {
    props: {
      dataUsers: dataUsers
    }
  }
}
