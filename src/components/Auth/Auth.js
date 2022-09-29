import { useContext, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { authUser } from '../../services/auth';

export default function Auth() {
  const { user, setUser } = useContext(UserContext);
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const userRes = await authUser(email, password, type);
    setUser(userRes);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/items" />;
  }

  return (
    <div>
      <div className="navbar auth-links">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
