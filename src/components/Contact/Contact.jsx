import { ContItem, DelButton } from 'components/Contact/Contact.styled';

export const Contact = ({ formattedName, contact, deleteContact }) => {
  return (
    <ContItem>
      <p>
        {formattedName}: {contact.number}
      </p>

      <DelButton onClick={() => deleteContact(contact.id)}>Delete</DelButton>
    </ContItem>
  );
};
