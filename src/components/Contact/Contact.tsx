import Card from '@material-ui/core/Card';
import { ContactType } from '../../utils/types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import './Contact.scss';

interface ContactProps {
  contact: ContactType;
}

const Contact = (props: ContactProps) => {
  const { contact } = props;

  return (
    <div key={contact.id.value}>
      <Card className='contact-card'>
        <div className='avatar-container'>
          <Avatar
            alt={`${contact.name.first} ${contact.name.last}`}
            src={contact.picture.large}
          />
        </div>
        <CardContent>
          <div className='contact-name'>
            {contact.name.first} {contact.name.last}
          </div>
          <div className='contact-info contact-secondary-text'>
            <Typography variant='body2'>Email: {contact.email}</Typography>
          </div>
          <div className='contact-info contact-secondary-text'>
            <Typography variant='body2'>Phone: {contact.cell}</Typography>
          </div>
          <div className='contact-info contact-secondary-text'>
            <Typography variant='body2'>
              City: {contact.location.city}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
