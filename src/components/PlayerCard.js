import React from 'react';
import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";


class PlayerCard extends React.Component {

    
    // constructor(props) {
    //     super(props)
        
        
    // }




    componentDidMount () {
        console.log('ChildDiv did mount');
        console.log(document.querySelectorAll('.stats-before-hover.PPG')[0]);
      }

    componentDidUpdate() {
        
// override default browser alert
window.alert = function(msg){

  $('.message').text(msg);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
}

$(function(e){
    // add listener for when enter button pressed (had to make focus on window so that enter recognized from anywhere, and not just if alert focused on)
    $(window).focus().keypress(function(e){
        if(e.charCode === 13) {
            $('.customAlert').css('animation', 'fadeOut 0.3s linear');

        setTimeout(function(){
         $('.customAlert').css('animation', 'none');
            $('.customAlert').css('display', 'none');
        }, 300);
        }
    
      })
  // add listener for when our confirmation button is clicked
  
	$('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');

    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
		$('.customAlert').css('display', 'none');
    }, 300);
  })

});


        // putting all the below in here so that no alert upon App rnder when cards not even showing 
        console.log('updated');
        // console.log(this.props.children[2].props.children[0]); // working on this shit 
        const random = this.props.random;
        const randomTwo = this.props.randomTwo;
     
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
                (() => {
                
                    let ppg =  document.querySelectorAll('.stats-before-hover.PPG'); // not iterable?
                    
                    for (const p of ppg) {
                        p.classList.add("animation");
                      }
                })();
                
                alert(random.Player + " gets by " + randomTwo.Player + " for the bucket!");
            } else if (randomStat === 0 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
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
    }
    
         
    render(){
        console.log("PlayerCard render");

       
        return (
            <div>
         
            <div className="mtg-card-container">
                <img className="MTG-card" src={MTGCard} alt="player card"/>
                
        <div>{this.props.children}</div>
           
                
        
            </div>

<div className='customAlert'  >
    <div className="message-container"> 
         <p className='message'></p>  
    </div>

  <input type='button' className='confirmButton'  />
</div>


</div>

            );
        };
 
    }
    


export default PlayerCard;