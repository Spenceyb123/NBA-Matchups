import React from 'react';
import './App.css';
// import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import PlayerCard from './PlayerCard';


const App = () => {

  d3.csv(importedCsvData).then(function(data) {
    data.forEach(function(d) {
      d.Rk = + d.Rk;
      d.TRB = +d.TRB;
      d.AST = +d.AST;
      d.STL = +d.STL;
      d.BLK = +d.BLK;
      d.TOV = +d.TOV;
      d.PTS = +d.PTS;
      d.TSP = +d.TSP;

      
      // let finishedWithImages = { ...d, ...Images };
      // console.log(finishedWithImages);
      // $.extend(d, Images);
     
    }) 
    // console.log(data); data like expected, hell ya
    
      for (var i = 0; i < data.length; i++) {
        for (var y = 0; y < Images.length; y++) {
          if (data[i].Rk === Images[y].id) {
            Object.assign(data[i], Images[y]); //merges 2nd param into first
          }
        }
      }
      // so data can be accessed outside of above function
    //  console.log(data[48]);
     
     
      
     
          
    
  });


  




  
  
  return (
    <div> 
      {console.log(Images[0].src)}
     
      {/* please god, above continue to work to display images */}
      <div className="cards-container">
        <PlayerCard images={Images}/>
        <PlayerCard images={Images}/>
        
        </div>

    </div>
    
  )
}

export default App;

