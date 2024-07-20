import PropType from "prop-types";
import NavbarComponent from "./Navbar";

const Container = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <div className="container mx-auto p-4">
                {children}
            </div>
        </>
    );
};

Container.propTypes = {
    children: PropType.node
}

export default Container