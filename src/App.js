import React, { Component } from 'react';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import './App.css'



class App extends Component {
    state= {
        counter: 0,
        fighters:[
            {
                key: 1,
                name: "ryu",
                selected: false
            },
            {
                key: 2,
                name: "blanka",
                selected: false
            }
            ,
            {
                key: 3,
                name: "dhalsim",
                selected: false
            }
            ,
            {
                key: 4,
                name: "vega",
                selected: false
            }
            ,
            {
                key: 5,
                name: "mbison",
                selected: false
            }
            ,
            {
                key: 6,
                name: "balrog",
                selected: false
            }
            ,
            {
                key: 7,
                name:"sagat",
                selected: false
            }
            ,
            {
                key: 8,
                name: "chunli",
                selected: false
            },
            {

                key: 9,
                name: "zangief",
                selected: false
            },
            {
                key: 10,
                name: "guile",
                selected: false
            },
            {
                key: 11,
                name: "ehonda",
                selected: false
            },
            {
                key: 12,
                name: "ken",
                selected: false
            }

        ]
    };

    counterCheck=(name,selectedState)=>{
        let fightersArray = this.state.fighters;
        fightersArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            fightersArray.forEach(fighter=> fighter.selected = false);
            this.setState({fighters: fightersArray, counter: 0})
        } else {
            fightersArray.forEach((fighter) => {
                if (fighter.name === name && fighter.selected === false) {
                    fighter.selected = true;
                    this.setState({fighters: fightersArray, counter: this.state.counter + 1})
                }
            });
        }
    };

    render(){
        return(
            <wrapper>
                <Header score={this.state.counter} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.fighters.map((fighter) => <CharacterCard  key={fighter.key} id ={fighter.key} character={fighter.name} selected={fighter.selected} counterCheck={this.counterCheck}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;