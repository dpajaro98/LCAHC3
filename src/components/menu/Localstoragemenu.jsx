import React from 'react';

class Localstoragemenu extends React.Component{

    
    render(props){
        var nombredeplato = this.props.Identificadordeplato
        var identificador = 0
        

        function guardar(llave){    
            var saber = document.getElementById(nombredeplato).value;
            localStorage.setItem(nombredeplato, saber);
            alert("Se ha añadido al carrito " ,);
            
                   }   
                   
        return(

            <div>
                <button className="btn-block" onClick={() => {guardar({identificador})}} >Agregar al carrito de compras</button>
            </div>
        );
    }
}
export default Localstoragemenu;