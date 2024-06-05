import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "./usersSlice";

const UsersView = () => {
  const [postsId, setPostsId] = useState(1);

  const dispatch = useDispatch();
  const { users, loading, errMsg } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserRequest(postsId));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (errMsg) return <div>Error: {errMsg}</div>;

  return (
    <div>
      <h1>Users</h1>
      <input
        type="number"
        value={postsId}
        onChange={(e) => setPostsId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchUserRequest(postsId))}>
        get post
      </button>
      <li key={users.id}>{users.title}</li>

      <ul>
        {postsId === 0 &&
          users.map((user) => <li key={user.id}>{user.title}</li>)}
      </ul>
    </div>
  );
};

export default UsersView;
