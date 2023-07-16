import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const { name, email, avatarURL } = user;
  console.log(avatarURL);
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <img
        src={
          avatarURL.includes('gravatar')
            ? avatarURL
            : `http://localhost:8080/${avatarURL}`
        }
        alt={name}
        width={100}
        height={100}
      />
      <Link to="update">Update</Link>
    </div>
  );
};

export default ProfilePage;
