import React, { Component } from 'react';
import CardList from './CardList';


class ShowData extends Component {

    CreateList=(data)=>{
        return (
         <CardList key={data.question.id} data={data} />
        )
    }

    render() { 
        const renderdata = this.props.datas.map(this.CreateList);
        
        return (
        <div className="Aligner">

        {renderdata} 
       
        <div className="button_wrapper">
          <button type="button" className="block tx_white" 
          onClick={this.props.renderConverter} >
          Download</button>
        </div>
        </div>  
        );
    }
}
 
export default ShowData;