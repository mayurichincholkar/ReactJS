import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {favouritecolor : "red"};
    }
    // static getDerivedStateFromProps(props,state){
    //     return{favouritecolor:props.favcol};
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    changeColor = () => {
        this.setState({favouritecolor: "blue"});
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({favouritecolor:"pink"})
    //     },1000)
    // }
    render(){
        return(
            // <h1>Hello</h1>
            <>
                 <h1>Hello</h1>
                <h1>My favourite color is {this.state.favouritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </>
        );
    }

}
// ReactDOM.render(<App favcol="yellow"/>,document.getElementById('root'));
export default App;