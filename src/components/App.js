import React from 'react';
import './App.css';
// import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
// import Scoreboard from './Scoreboard'; // prob gonna just get rid of this and component

// working on... 
//1. why setState before alert in PlayerCard not working and causing multiple animations?
// 2. get scorebard working * add state count to playerCard???
//3. make sure doesn't add two to scorecard since two playerCards
// 4.drop shadow on monitor and cards?
//5. update cards on alert ok, then compare stats when click juump ball



class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        data: null,
        // hasMounted: false //I don't think this is doign anything??????......
    };
    // console.log(this.state.hasMounted);
}

componentDidMount() { 

  let self = this;
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

    }) 
    
      for (var i = 0; i < data.length; i++) {
        for (var y = 0; y < Images.length; y++) {
          if (data[i].Rk === Images[y].id) {
            Object.assign(Images[y], data[i]); //merges 2nd param into first
          }
        }
      }  

   self.setState({ data: Images }); // do I need this with refig????????
   console.log(data[40]);
   //setting initial cards to Jordan and Kobe....
   //Jordan
   document.getElementsByClassName("name-container")[0].insertAdjacentHTML('afterbegin', data[0].Player );
   document.getElementsByClassName("year")[0].insertAdjacentHTML('afterbegin', data[0].Season);
   document.getElementsByClassName("player-image")[0].src = self.state.data[0].src; //merged Images with data in state
   document.getElementsByClassName("stats-before-hover")[0].insertAdjacentHTML('beforeend', data[0].PTS);
   document.getElementsByClassName("stats-before-hover")[1].insertAdjacentHTML('beforeend', (data[0].TSP * 100).toFixed(1) + "%");
   document.getElementsByClassName("stats-before-hover")[2].insertAdjacentHTML('beforeend', data[0].AST);
   document.getElementsByClassName("stats-before-hover")[3].insertAdjacentHTML('beforeend', data[0].TRB);
   document.getElementsByClassName("stats-before-hover")[4].insertAdjacentHTML('beforeend', data[0].BLK);
   document.getElementsByClassName("stats-before-hover")[5].insertAdjacentHTML('beforeend', data[0].STL);
   document.getElementsByClassName("stats-before-hover")[6].insertAdjacentHTML('beforeend', data[0].TOV);

   //Kobe
   document.getElementsByClassName("name-container")[1].insertAdjacentHTML('afterbegin', data[40].Player );
   document.getElementsByClassName("year")[1].insertAdjacentHTML('afterbegin', data[40].Season);
   document.getElementsByClassName("player-image")[1].src = self.state.data[40].src; //merged Images with data in state
   document.getElementsByClassName("stats-before-hover")[7].insertAdjacentHTML('beforeend', data[40].PTS);
   document.getElementsByClassName("stats-before-hover")[8].insertAdjacentHTML('beforeend', (data[40].TSP * 100).toFixed(1) + "%");
   document.getElementsByClassName("stats-before-hover")[9].insertAdjacentHTML('beforeend', data[40].AST);
   document.getElementsByClassName("stats-before-hover")[10].insertAdjacentHTML('beforeend', data[40].TRB);
   document.getElementsByClassName("stats-before-hover")[11].insertAdjacentHTML('beforeend', data[40].BLK);
   document.getElementsByClassName("stats-before-hover")[12].insertAdjacentHTML('beforeend', data[40].STL);
   document.getElementsByClassName("stats-before-hover")[13].insertAdjacentHTML('beforeend', data[40].TOV);


   



   
  //  document.getElementsByClassName("year")[0].innerText = data[0].Season;
  }); 
  console.log('mounted');
}




componentDidUpdate() {
  console.log("app updated");
  console.log(document.getElementsByClassName("year"));
}


handleBasketballButton =  () => {
 
  const random = Math.floor(Math.random() * Images.length); 
  const randomTwo = Math.floor(Math.random() * Images.length);
    
  if (random === randomTwo) { //so that won't be same two players 
    random = Math.floor(Math.random() * Images.length); 
    randomTwo = Math.floor(Math.random() * Images.length);
  }
    
     
        if(random !== undefined || randomTwo !== undefined){
            
            const statsArrayRandom = [];
            const randomPPG = random.PTS;
            const randomTSP = random.TSP;
            const randomAPG = random.AST;
            const randomRPG = random.TRB;
            const randomBPG = random.BLK;
            const randomSPG = random.STL;
            const randomTPG = random.TOV;
            statsArrayRandom.push(randomPPG, randomTSP, randomAPG, randomRPG, randomBPG, randomSPG, randomTPG);

            const statsArrayRandomTwo = [];
            const randomTwoPPG = randomTwo.PTS;
            const randomTwoTSP = randomTwo.TSP;
            const randomTwoAPG = randomTwo.AST;
            const randomTwoRPG = randomTwo.TRB;
            const randomTwoBPG = randomTwo.BLK;
            const randomTwoSPG = randomTwo.STL;
            const randomTwoTPG = randomTwo.TOV;
            statsArrayRandomTwo.push(randomTwoPPG, randomTwoTSP, randomTwoAPG, randomTwoRPG, randomTwoBPG, randomTwoSPG, randomTwoTPG);

            const randomStat = Math.floor(Math.random() * statsArrayRandom.length);
            
            // console.log(statsArrayRandom, statsArrayRandomTwo);
           

            if(randomStat === 0 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                // this.setState({countLeft: +1}); causes to rerender :(
                (() => {
                
                    let ppg =  document.getElementsByClassName(this.props.children[2].props.children[0].props.className); 
                    
                    for (const p of ppg) {
                        p.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " gets by " + randomTwo.Player + " for the bucket!");
                

            } else if (randomStat === 0 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                // this.setState({countRight: +1});
                (() => {
                    
                    let ppg =  document.getElementsByClassName(this.props.children[2].props.children[0].props.className);
          
                    for (const p of ppg) {
                        p.classList.add("animation");
                      }

                })();
                
                alert(randomTwo.Player + " gets by " + random.Player + " for the bucket!");
                
            } else if (randomStat === 1 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName(this.props.children[2].props.children[1].props.className);
                    //started keeping variable names same when copying and pastying since local scope 
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " is money!");
            } else if (randomStat === 1 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName(this.props.children[2].props.children[1].props.className);
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                alert(randomTwo.Player + " is money!");
            } else if (randomStat === 2 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName(this.props.children[2].props.children[2].props.className);
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " makes " + randomTwo.Player + "'s head spin with the dime!");
            } else if (randomStat === 2 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName(this.props.children[2].props.children[2].props.className);
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                alert(randomTwo.Player + " makes " + random.Player + "'s head spin with the dime!");
            } else if (randomStat === 3 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName(this.props.children[2].props.children[3].props.className);
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " secures the rebound!");
            } else if (randomStat === 3 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName(this.props.children[2].props.children[3].props.className);
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                alert(randomTwo.Player + " secures the rebound!");
            } else if (randomStat === 4 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName(this.props.children[2].props.children[4].props.children[0].props.className);
                    
                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " swats " + randomTwo.Player + "!");
            } else if (randomStat === 4 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName(this.props.children[2].props.children[4].props.children[0].props.className);

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                alert(randomTwo.Player + " swats " + random.Player + "!");
            } else if (randomStat === 5 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName(this.props.children[2].props.children[4].props.children[1].props.className);

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " picks " + randomTwo.Player + "'s pocket!");
            } else if (randomStat === 5 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName(this.props.children[2].props.children[4].props.children[1].props.className);

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                alert(randomTwo.Player + " picks " + random.Player + "'s pocket!");
            } else if (randomStat === 6 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName(this.props.children[2].props.children[4].props.children[2].props.className);

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                alert(randomTwo.Player + " turns the ball over... that's embarrassing");
            } else if (randomStat === 6 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName(this.props.children[2].props.children[4].props.children[2].props.className);

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                alert(random.Player + " turns the ball over... that's embarrassing");
            }

        }


  let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
  (function _removeClasses() {
    for (var i = 0; i < statsParagraphElements.length; i++) {
      statsParagraphElements[i].classList.remove('animation')
    }
  }());
}

//so one of customalerts not show below...
handleAlerts = () => {
  let firstAlert = document.getElementsByClassName('customAlert')[1]; //actually second alert

  if(firstAlert !== undefined) {
    firstAlert.parentNode.removeChild(firstAlert);
  };
}

newPlayersOnAlert = () => {
  this.setState({ data: Images });
  console.log("new Players");
}

  
  render(){
   
    console.log("app render");
    


    if (!this.state.data) {
      return  <div className="loading-container" id="test"> 
                <p className="loading-text">Loading...</p>
             </div>
  }


  

    return (
      <div > 
 
        <div className="basketball-container"> 
        <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
        </div>
        
      
        <div className="cards-container" tabIndex= "-1">
          
          
        <PlayerCard render={this.handleAlerts()} data={this.state.data} newPlayersOnAlert={this.newPlayersOnAlert} >
        
                <div className="name-container"><span className="year"></span></div>
                <div className="player-image-container">
                    <img className="player-image"  />
                </div>
                <div className="stats">
                    <p className="stats-paragraph left PPG" >
                      <span className="stats-before-hover">PPG: </span>
                      <span className="stats-hover">Points Per Game</span>
                      </p>
                    <p className="stats-paragraph left TSP">
                      <span className="stats-before-hover">TSP: </span>
                      {/* {((this.state.data[random].TSP) * 100 ).toFixed(1) }% */}
                      <span className="stats-hover">True Shooting %</span>
                      </p>
                    <p className="stats-paragraph left APG">
                      <span className="stats-before-hover">APG: </span>
                      <span className="stats-hover">Assists Per Game</span>
                      </p>
                    <p className="stats-paragraph left RPG">
                      <span className="stats-before-hover">RPG: </span>
                      <span className="stats-hover">Rebounds Per Game</span>
                      </p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right BPG">
                      <span className="stats-before-hover">BPG: </span>
                      <span className="stats-hover">Blocks Per Game</span>
                      </p>
                    <p className="stats-paragraph right SPG">
                      <span className="stats-before-hover">SPG: </span>
                      <span className="stats-hover">Steals Per Game</span>
                      </p>
                    <p className="stats-paragraph right TPG">
                      <span className="stats-before-hover">TPG: </span>
                      <span className="stats-hover">Turnovers Per Game</span>
                      </p>
                    </div>
                    
                    
                </div>
            
                </PlayerCard>



        <PlayerCard > 

        <div className="name-container"><span className="year"></span></div>
                <div className="player-image-container">
                    <img className="player-image"  />
                </div>
                <div className="stats">
                <p className="stats-paragraph left PPG" >
                <span className="stats-before-hover">PPG: </span>
                      <span className="stats-hover">Points Per Game</span>
                      </p>
                    <p className="stats-paragraph left TSP">
                      <span className="stats-before-hover">TSP: </span>
                      <span className="stats-hover">True Shooting %</span>
                      </p>
                    <p className="stats-paragraph left APG">
                      <span className="stats-before-hover">APG: </span>
                      <span className="stats-hover">Assists Per Game</span>
                      </p>
                    <p className="stats-paragraph left RPG">
                      <span className="stats-before-hover">RPG: </span>
                      <span className="stats-hover">Rebounds Per Game</span>
                      </p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right BPG">
                      <span className="stats-before-hover">BPG: </span>
                      <span className="stats-hover">Blocks Per Game</span>
                      </p>
                    <p className="stats-paragraph right SPG">
                      <span className="stats-before-hover">SPG: </span>
                      <span className="stats-hover">Steals Per Game</span>
                      </p>
                    <p className="stats-paragraph right TPG">
                      <span className="stats-before-hover">TPG: </span>
                      <span className="stats-hover">Turnovers Per Game</span></p>
                    </div>
                    
                    
                </div>
      
         
        </PlayerCard >
  
          
          </div>
       
      </div>
      
      
    )
    
    
  }
  
  
}

export default App;


