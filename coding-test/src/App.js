import React, {Component} from 'react';
import './App.css';

// App 컴포넌트 아래 Header(입력)과 List(내용 출력, 삭제, 수정) 컴포넌트
import Header from './components/Header';
import List from './components/List';


class App extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      id : 4,
      lists : [
        {id: 1, item: 'starting test'},
        {id: 2, item: 'git push'},
        {id: 3, item: 'send a email to actbase'}
      ]
    }
  }
  render() {
    if(this.state.mode==='write'){
      <Header onSubmitValue={(_inputItem)=>{
          console.log(_inputItem);
        }}></Header>;
    }

    else if(this.state.mode==='delete'){

    }
    else if(this.state.mode==='edit'){

    }
    return (
      <div className='App'>
        <Header onWrite={()=>{
          this.setState({mode:'write', lists:this.state.lists});
          }}></Header>
        <List data={this.state.lists}
          onDelete={()=>{
            this.setState({mode:'delete'});
          }}
          onEdit={()=>{
            this.setState({mode:'edit'});
          }}></List>
      </div>
    );
  }
}

export default App;