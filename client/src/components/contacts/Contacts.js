import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';


const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please, add contact</h4>
    }
    console.log(filtered);

    return (

        <React.Fragment>
            <TransitionGroup>
                {filtered ? filtered.map(contact => (
                    <CSSTransition key={contact.id} timeout={500} classNames="item">
                        <ContactItem contact={contact} />
                    </CSSTransition>)) : contacts.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </React.Fragment>
    )
}

export default Contacts;