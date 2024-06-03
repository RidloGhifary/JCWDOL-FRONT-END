import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormUggaga from "./components/Form";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);

      const newPost = posts.filter((post) => post.id !== id);
      setPosts(newPost);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const titleValue = e.target.title.value;
      const viewsValue = e.target.views.value;
      const content = {
        id: String(Date.now()),
        title: titleValue,
        views: viewsValue,
      };

      await axios.post(`http://localhost:3000/posts`, content);

      setPosts((posts) => [...posts, content]);
      e.target.title.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="add title" name="title" id="title" type="text" />
        <input
          placeholder="add views"
          name="views"
          id="views"
          type="number"
          defaultValue={0}
        />
        <button type="submit">Submit</button>
      </form>

      {posts?.map((d) => (
        <div key={d.id}>
          <p>
            <Link to={`/post/${d.id}`}>{d.title}</Link>
            <b> {d.views}</b>
          </p>
          <button onClick={() => handleDelete(d.id)}>delete</button>
        </div>
      ))}

      <FormUggaga />
    </div>
  );
};

export default App;
