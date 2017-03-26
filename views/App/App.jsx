import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      testMe: "Hello from React"
    }
  }

   render() {
      return (
         <div>
           {this.state.testMe}
         </div>
      );
   }
}

export default App;
