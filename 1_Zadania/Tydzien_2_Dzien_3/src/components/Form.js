import React from "react";

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input type="text" name="productName" placeholder="nazwa" />
        <input type="text" name="price" placeholder="cena" />
        <button type="submit">Dodaj produkt</button>
      </form>
    )
  }
}

export default Form;
