import React from "react";
import  ReactDOM  from "react-dom/client";



class App extends React.Component {
    constructor(){
        super()

        this.state = {
            name : ""
        }
    };

    Fillapp() {
        this.setState(
            {
                name: "john"
              }
        );
        window.alert(this.state.name)
    }

    render() {
        return (
                <div>
                    <button type="button" onClick={()=>this.Fillapp()}><p>clickme</p></button>
                </div>
        );
    }


    
    
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>)