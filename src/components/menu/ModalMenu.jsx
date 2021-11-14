import React from 'react';

class Modalmenu extends React.Component{

    render(props){
        return(
            <div>
                <div className="container">
                    
                    <div className="modal" id="myModal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title"> {this.props.Nombredeplato}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                          </div>
                          <div className="modal-body">
                            {this.props.Descripciondeplato}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
              </div>

        );
    }
}
export default Modalmenu;