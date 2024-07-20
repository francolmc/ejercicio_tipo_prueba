import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <nav className="bg-indigo-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    Ejercicio
                </div>
                <div>
                    <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link to="/exercise" className="text-white px-3 py-2 rounded-md text-sm font-medium">Ejercicio</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;