import React from 'react';
import PropTypes from "prop-types";

// react는 자동적으로 class component의 render method를 실행
class App extends React.Component {
  
  // state 안의 데이터들은 변함
  state = {
    count: 0
  };
  
  // setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  
  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
