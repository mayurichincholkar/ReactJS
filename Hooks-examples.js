// import React, { useState } from 'react';  

// function App() {
//   const [count, setCount] = useState(0); 
//   return (  
//     <div>  
//       <p>You clicked {count} times</p>  
//       <button onClick={() => setCount(count + 1)}>  
//         Click me  
//       </button>  
//     </div>  
//   );   

// }
// class App extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.state = {  
//       count: 0  
//     };  
//   }  
//   render() {  
//     return (  
//       <div>  
//         <p><b>You clicked {this.state.count} times</b></p>  
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>  
//           Click me  
//         </button>  
//       </div>  
//     );  
//   }  
// }  

import React, { useState, useEffect } from 'react';  
  
const useDocumentTitle = title => {  
  useEffect(() => {  
    document.title = title;  
  }, [title])  
}  
function App() {  
  const [count, setCount] = useState(0);  
  const incrementCount = () => setCount(count + 1);  
  useDocumentTitle(`You clicked ${count} times`);  
  // Similar to componentDidMount and componentDidUpdate:  
  // useEffect(() => {  
  //   // Update the document title using the browser API  
  //   document.title = `You clicked ${count} times`;  
  // });  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      {/* <button onClick={() => setCount(count + 1)}>   */}
      <button onClick={incrementCount}>Click me  
        Click me  
      </button>  
    </div>  
  );  
}  
export default App;
