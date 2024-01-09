import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Div } from 'components/Layout/Layout.styled';

const ContactsPage = () => {
  return (
    <Div>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Div>
  );
};

export default ContactsPage;
