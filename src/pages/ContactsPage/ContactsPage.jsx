import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Div } from 'components/Layout/Layout.styled';
import { StyledLink } from 'components/RegistrForm/RegistrForm.styled';

const ContactsPage = () => {
  return (
    <Div>
      <StyledLink type="button" to="/">
        Home Page
      </StyledLink>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Div>
  );
};

export default ContactsPage;
