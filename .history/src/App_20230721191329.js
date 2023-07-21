import UserFinder from "./components/UserFinder";
import UsersContext from "./components/store/users-context";

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
