import React, {Component} from "react";

class Header extends Component {
    render() {
      return (
        <header>
          <h1>ToDo</h1>          
          <input type="text" id="inputItem" placeholder="input text" />
          <button type="submit" onClick={(e)=>{
                e.preventDefault();
                this.props.onWrite();
                const inputItem = document.querySelector('#inputItem');
                if(inputItem.value){
                  let value = inputItem.value;
                  const lists = [...this.props.lists.item];
                  let id = this.state.id;
                  lists.push({id:{id}, item:{value}});
                }
              }
            }>ADD</button>
        </header>
      );
    }
  }

export default Header;