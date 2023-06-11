/*
 * Dependency Inversion Principle
 *
 * In this refactored code we have done the following:
 *
 * First, we removed the direct reference to the api module from inside the
 * LoginForm, and instead, added abstraction via onSubmit injection using props
 * allowing the parent component to provide a concrete implementation. With
 * this change, the LoginForm component is now reusable in other contexts, and
 * it is no longer coupled to the api module.
 *
 * Second, we added a new component called ConnectedLoginForm, which
 * provides a concrete implementation of the onSubmit prop. Or, in other words,
 * serves as an adapter between the LoginForm and the api module allowing them
 * to stay decoupled from each other but still work together.
 */

// ~/src/components/LoginForm

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

//
// ----------------------------------------------------------------------------
//

// ~/src/components/ConnectedLoginForm

import api from '~/common/api';

const ConnectedLoginForm = () => {
  const handleSubmit = async (email: string, password: string) => {
    await api.login(email, password);
  };

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
};
