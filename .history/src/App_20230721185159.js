import UserFinder from "./components/UserFinder";
import Users from "./components/Users";

function App() {
  const UsersContext = {
    users: DUMMY_USERS,
  };
  return (
    <UsersContext.Provider value={UsersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
