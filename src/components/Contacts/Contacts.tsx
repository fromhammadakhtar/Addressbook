import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ContactType } from '../../utils/types';
import Contact from '../Contact/Contact';
import './Contacts.scss';

interface ContactsProps {
  contacts: ContactType[];
}

const Contacts = (props: ContactsProps) => {
  const { contacts } = props;
  return (
    <div className='contacts-container'>
      <Grid container spacing={1}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Contact contact={contact} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Contacts;
