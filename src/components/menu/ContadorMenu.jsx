import React from "react";
import Localstoragemenu from  './Localstoragemenu'

class ContadorMenu extends React.Component{
    render(props){
        return(
            <div className="container">
                <label><input type="number" min="0" defaultValue="0" id={this.props.Identificadordeplato}></input>Unidades</label>
                <h3>
                    <Localstoragemenu Identificadordeplato ={this.props.Identificadordeplato} />
                </h3>
            </div>
        );
    }
}
  
export default ContadorMenu;