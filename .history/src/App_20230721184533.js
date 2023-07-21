import UserFinder from "./components/UserFinder";
import Users from "./components/Users";

function App() {
  const UsersContext = {
    users: DUMMY_USERS,
  };
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
