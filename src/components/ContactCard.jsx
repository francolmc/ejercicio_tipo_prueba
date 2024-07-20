import { Link } from "react-router-dom";
import PropType from "prop-types";

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white shadow rounded-md p-4 mb-4">
      <div className="mb-2">
        <h2 className="text-xl font-bold">
          {contact.first_name} {contact.last_name}
        </h2>
        <p className="text-gray-600">{contact.email}</p>
      </div>
      <Link
        to={`/contact/${contact.id}`}
        className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Editar
      </Link>
    </div>
  );
};

ContactCard.propTypes = {
    contact: 
        PropType.shape({
            id: PropType.number,
            first_name: PropType.string,
            last_name: PropType.string,
            email: PropType.string
        })
}

export default ContactCard;
