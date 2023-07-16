import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAvatar } from 'redux/auth/authOperations';

const UpdateProfilePage = () => {
  const [file, setFile] = useState(null);
  const handleChange = event => {
    setFile(event.target.files[0]);
  };
  const dispatch = useDispatch();

  const handleUpload = () => {
    dispatch(addAvatar(file));
  };

  return (
    <div>
      <input type="file" name="avatar" onChange={handleChange} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
};

export default UpdateProfilePage;
