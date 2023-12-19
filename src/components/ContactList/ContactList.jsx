
import { ContactListStyle, ContactItem, Line, DeleteButton} from "./ContactList.styled";

const ContactList = ({ listContacts, onDelete }) => {
    return ( <ContactListStyle>
            {listContacts.map(({name, number, id}) => {
                return (
                <>
                <ContactItem key={id} >
                    <Line>{name}: {number}</Line>
                    <DeleteButton type="button" onClick={() => onDelete(id, name)}>Delete</DeleteButton>
                </ContactItem>
                </>
            )})}
        </ContactListStyle>
    );
            }
    export default ContactList;
 