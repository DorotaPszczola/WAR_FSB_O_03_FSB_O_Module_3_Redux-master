// Pamiętaj aby na końcu pliku wyeksportować komponent jako domyślny export
// np. export default User
import React from "react";
import PropTypes from "prop-types";

const User = ({firstName, lastName, age, onClick}) => {
    return (
        <>
<h1>Cześć {firstName} {lastName} {age}  </h1>
        </>

    )

};

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}