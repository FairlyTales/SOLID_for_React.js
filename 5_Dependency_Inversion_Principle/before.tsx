/*
 * Dependency Inversion Principle
 *
 * The dependency inversion principle states that “one should depend upon abstractions, not concretions”. In other words, one component shouldn’t directly depend on another component, but rather they both should depend on some common abstraction.
 *
 * This principle aims to minimize coupling between different components of the
 * application. It is somewhat of a recurring theme throughout all SOLID
 * principles - from minimizing the scope of responsibilities for an individual
 * component to minimizing cross-component awareness and dependencies between them.
 *
 * In this example, we have a login form with a tightly coupled dependency on the
 * API module. This means that the login form can only be used in the context of
 * this API module, and it cannot be reused in other contexts. Moreover, if we
 * ever decide to change the API module, we will have to change the login form
 * as well.
 *
 * See the refactored code in the after.jsx file.
 */

// ~/src/components/LoginForm

import api from '~/src/common/api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.login(email, password);
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
