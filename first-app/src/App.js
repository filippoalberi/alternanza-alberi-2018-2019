import React from 'react';
import './Style.css';

class App extends React.Component{

    state = {
        counter: 0,
        
    }

    renderButtonComponent = (text,callback) =>{
        let Cont = 0;
        if(text===" + "){
            Cont = this.state.counter +1;
        }
        if(text===" - "){
            Cont = this.state.counter -1;
                    }
        if (text==="random"){
            Cont = Math.floor(Math.random() * 1000);
                  }
        if ( text==="azzera"){
            Cont = 0;
                   }
        return(
            <button class="myStyle" onClick={()=>{
                this.setState({counter: Cont})
                }
            }>
            {text}
            </button>

        );
    } 

    render(){
        return  ( 
            <div class="div">
                <h3>Counter: {this.state.counter}</h3>
                {this.renderButtonComponent(" + ")}
                {this.renderButtonComponent(" - ")}
                {this.renderButtonComponent("random")}
                {this.renderButtonComponent("azzera")}
            </div> 
        );      
    }

}



export default App;