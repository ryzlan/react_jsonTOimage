import React, { Component } from 'react';

import OptionsList from './OptionsList';

class CardList extends Component {
    state = {  }
    render() { 
         const {id ,question } = this.props.data.question ;
         
        return (
            <div className="card-wrapper" id={id}>
              <div className="cards" >
                <div className="card-body question">
                    <p className="card-text questions">
                    {question}
                    </p>
                </div>
                <OptionsList  answers={this.props.data.answers}/>
              </div>
              <div className="footer">
                  <p> www.porashona.online</p>
              </div>
              
          </div>
        );
    }
}
 
export default CardList;