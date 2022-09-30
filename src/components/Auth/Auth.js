import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { authUser } from '../../services/auth';
import './Auth.css';

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
    <div className="auth-form">
      <h1 className="title">Access Your Shopping List:</h1>
      <label>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Email Address"
            mb="15px"
            w="350px"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
      </label>
      <label>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Password"
            mb="15px"
            w="350px"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </label>
      <Button colorScheme="teal" size="md" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
