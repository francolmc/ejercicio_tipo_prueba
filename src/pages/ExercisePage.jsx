import Container from "../components/Container";

const ExercisePage = () => {
    return (
        <Container>
            <h1 className="text-xl font-bold mb-4">Ejercicio</h1>
            <p>
                Considerando la aplicación de React, se requiere realizar lo siguiente:
                <ul className="list-disc pl-5 space-y-2">
                    <li className="p-2">
                        Mostrar la lista de contactos en la página Home. Los datos se pueden obtener mediante fetch en la dirección https://programacionfrontendbackend.onrender.com/api/contacts usando el método GET. Un ejemplo del endpoint entregado es:
                        <br />
                        <pre>
                        {'['} <br />
                        {'   {'} <br />
                        {'        "email": "pedro@email.com",'} <br />
                        {'        "first_name": "Pedro",'} <br />
                        {'        "id": 1,'} <br />
                        {'        "last_name": "Rojas"'} <br />
                        {'    },'} <br />
                        {'    {'} <br />
                        {'        "email": "carlitos@email.com",'} <br />
                        {'        "first_name": "Carlitos",'} <br />
                        {'        "id": 3,'} <br />
                        {'        "last_name": "Castro"'} <br />
                        {'    }'} <br />
                        {']'} <br />
                        </pre>
                        Este contenido debe ser mostrado en el componente ContactList.
                    </li>
                    <li className="p-2">
                        En caso de que la lista de datos esté vacía, se debe mostrar el mensaje {'"No hay contactos registrados."'}
                    </li>
                    <li className="p-2">
                        Crear una página llamada DeletePage que se encargue de eliminar un contacto. El formulario debe mostrar el detalle del contacto, considerando los campos first_name, last_name y email. Estos campos mostrarán 
                        los datos del contacto, los cuales podrán ser editados mediante la acción de presionar el botón Actualizar Contacto.
                        <br />
                        Para mostrar los datos del contacto se puede usar la siguiente dirección {"https://programacionfrontendbackend.onrender.com/api/contacts/<id>"} mediante el método GET, donde {"<id>"} será reemplazado por el id del contacto.
                        <br />
                        El dato obtenido tendrá el siguiente formato:
                        <pre>
                        {'{'} <br />
                        {'     "email": "pedro@email.com",'} <br />
                        {'     "first_name": "Pedro",'} <br />
                        {'     "id": 1,'} <br />
                        {'     "last_name": "Rojas"'} <br />
                        {'}'}
                        </pre>
                        <br />
                        El id del contacto será entregado por la URL /contact/1. Para esto, deberá configurar la ruta en el archivo App.jsx.
                        <br />
                        Para guardar los datos del contacto, podrá usar la dirección {"https://programacionfrontendbackend.onrender.com/api/contacts/<id>"} mediante el método PUT, y enviar el cuerpo en el siguiente formato:
                        <pre>
                        {'{'} <br />
                        {'     "email": "pedro@email.com",'} <br />
                        {'     "first_name": "Pedro",'} <br />
                        {'     "last_name": "Rojas"'} <br />
                        {'}'}
                        </pre>
                    </li>
                    <li className="p-2">
                        Una vez que los datos sean guardados, deberá redirigir al usuario a la página principal.
                    </li>
                </ul>
            </p>
        </Container>
    );
};

export default ExercisePage;
