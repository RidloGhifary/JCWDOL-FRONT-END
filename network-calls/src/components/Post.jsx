import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const [isEdited, setIsEdited] = useState(false);
  const [editedPost, setEditedPost] = useState(post);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const views = e.target.views.value;

      const content = { ...post, title, views };

      await axios.patch(`http://localhost:3000/posts/${id}`, editedPost);
      setPost(content);
      setIsEdited(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <span>Post {id}</span>
      <h1>
        {post.title} - {post.views}
      </h1>

      <button onClick={() => setIsEdited(!isEdited)}>
        {isEdited ? "Cancel" : "Edit"}
      </button>
      {isEdited && (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            defaultValue={post.title || ""}
            name="title"
            id="title"
            onChange={(e) =>
              setEditedPost({ ...editedPost, title: e.target.value })
            }
          />
          <input
            type="number"
            defaultValue={post.views || ""}
            name="views"
            id="views"
            onChange={(e) =>
              setEditedPost({ ...editedPost, views: e.target.value })
            }
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Post;
