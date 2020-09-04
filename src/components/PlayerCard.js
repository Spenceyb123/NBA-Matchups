import React from 'react';
// import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";




class PlayerCard extends React.Component {

    
    // constructor(props) {
    //     super(props)
    // }
    
         
    render(){
        console.log("PlayerCard render");
        
        // console.log(this.props.data);
        // if (this.props.data.TSP === undefined) {
        //     return <div/>
        // }
        // console.log(this.props.children);
        return (
            
         
            <div className="mtg-card-container">
                <img className="MTG-card" src={MTGCard} alt="player card"/>
                
        <div>{this.props.children}</div>
            {console.log(this.props)}
                
        
            </div>
            );
        };

        componentDidMount () {
            console.log('ChildDiv did mount')
            // this.props.onRender() // tell parent that child did mount
            console.log(this.props);
          }
    }
    


export default PlayerCard;