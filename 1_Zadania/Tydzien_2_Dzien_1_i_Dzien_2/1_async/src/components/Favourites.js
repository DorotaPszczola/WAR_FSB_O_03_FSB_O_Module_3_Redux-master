import React from "react";

const Favourites = ({ quotes }) => {
    console.log("quotes from component", quotes)

    return (quotes.length > 0 &&
        <div>
            <h1>ulubione cytaty</h1>

            <ul>
                {quotes.map((fav, index) => {
                    return <li key={index}>{fav}</li>
                })
                }
            </ul>
        </div>

    )
}

// Favourites.propTypes = {
//   quotes: PropTypes.array.isRequired
// };

export default Favourites;
