import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { api } = useAxios();
  const { auth } = useAxios();

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(res.data.user);
        setPosts(res.data.posts);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  console.log("user", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{user?.firstName}</div>;
};

export default ProfilePage;
