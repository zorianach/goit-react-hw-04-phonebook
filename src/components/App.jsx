import { useState } from "react";
import AddContactForm from "./Forms/AddContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import data from '../components/contacts.json'
import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import Filter from "./Filter/Filter";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', data);
  const [filter, setFilter] = useState('');

  const addContact = (name, number ) => {
    const normalizedName = name.toLowerCase();

    const isAdded = contacts.find(el => el.name.toLowerCase() === normalizedName) 

    if (isAdded) {
      Notify.failure(`${name}: is already in contacts`, {
        position: 'top-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px'
      })
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact] , Notify.success(`Contact ${name} has been added to your Contacts`)
    );

  };

  const changeFilter = (e) => {
    setFilter (e.currentTarget.value);
    // console.log(this.state)
  };
  
  const filteredContacts = () => {
    // const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = (contactId, name) => {
    setContacts(prevState => (
      prevState.filter(contact => contact.id !== contactId)), Notify.info(`Contact ${name} has been deleted from your Contacts`)
    );
  };

  const listedContacts = filteredContacts();

  return (
    <>
  
    <Section title="Phonebook">
      <AddContactForm onSubmit={addContact}/>
    </Section>
    <Section title="Contacts">
      <Filter value={filter} onChange={changeFilter}/>
      <ContactList listContacts={listedContacts} onDelete={deleteContacts}/>
    </Section>
    </>
  );
};

export default App;
