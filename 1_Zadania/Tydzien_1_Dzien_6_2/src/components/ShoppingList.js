import React, {Component} from "react";

class ShoppingList extends Component {

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(el) => this.inputEl = el}/>
          <button onClick={() => this.props.addProduct(this.inputEl.value)}>Dodaj produkt</button>
        </div>
        <div>
          <ol>
            {this.props.products.map((name, index) =>
              <li key={name}>
                <button onClick={() => this.props.changeOrder(index, -1)}>up</button>
                <button onClick={() => this.props.changeOrder(index, 1)}>down</button>
                {name}
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
