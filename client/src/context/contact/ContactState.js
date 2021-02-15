import React, { useReducer } from 'react';
import uuid from 'uuid/v4';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                type: "professional",
                id: 1,
                name: "New User",
                email: "user2@gmail.com",
                phone: "111-111-111"
            },
            {
                type: "professional",
                id: 2,
                name: "New User 2",
                email: "user@gmail.com",
                phone: "111-111-111"
            }
        ],
        current: null,
        filtered: null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    //delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // SET current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    //clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //update contact

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // filter contatcs

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    //clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;