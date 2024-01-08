import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  StyledLink,
} from 'components/RegistrForm/RegistrForm.styled';

const LoginForm = ({ login }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    login(user);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <StyledLink type="button" to="/">
          Home Page
        </StyledLink>
        <FormGroup>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Password" name="password" type="password" />
        </FormGroup>
        <Button type="submit">Login</Button>
        <StyledLink to="/register">Registration</StyledLink>
      </Form>
    </Container>
  );
};

export default LoginForm;
