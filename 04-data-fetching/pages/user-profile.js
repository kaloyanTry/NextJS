function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  return {
    props: {
      username: 'Max',
    },
  };
}
