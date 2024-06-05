import IndomieView from "./feature/indomie/IndomieView";
import LaysView from "./feature/lays/LaysView";
import UsersView from "./feature/users/UsersView";

const App = () => {
  return (
    <div>
      <IndomieView />
      <LaysView />
      <UsersView />
    </div>
  );
};

export default App;
