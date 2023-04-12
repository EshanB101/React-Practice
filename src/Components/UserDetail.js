import {useParams, useNavigate} from 'react-router-dom';

const UserDetail = () => {
  const {userId} = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div>Detail about user {userId}</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default UserDetail