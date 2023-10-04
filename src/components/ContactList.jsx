import ContactCard from "./ContactCard";

function ContactList({contacts, removeContactHandler}) {


    const renderContacts = contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} removeContactHandler={ removeContactHandler} />
        )
    })
    return (
        <div className="pb-10">
            {renderContacts}
        </div>
    )
}

export default ContactList;