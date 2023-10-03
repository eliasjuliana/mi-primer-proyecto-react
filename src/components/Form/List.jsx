import Item from "./Item.jsx";

const List = (props) => {

    const {contacts} = props;

    console.log(contacts);
  return (
    <ul>
        {contacts.map((contact) => (
                <Item key={contact.id} contact={contact} />
        ))}
    </ul>
  )
}

export default List