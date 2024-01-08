import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  StyledLink,
} from './RegistrForm.styled';

const RegistrForm = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    register(newUser);
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
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="e mailHelp"
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            placeholder="Password"
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Register
        </Button>
        <StyledLink to="/login">Login</StyledLink>
      </Form>
    </Container>
  );
};

export default RegistrForm;
