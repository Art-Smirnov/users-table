import UsersTable from './components/UsersTable';
import UserSearch from './components/MainSearchInput';

function App() {
  return (
    <div className="p-8 mx-auto max-w-[1256px] min-w-5xl">
      <UserSearch />
      <UsersTable />
    </div>
  );
}

export default App;
