import React, { Component } from "react";

export default class HigherOrderComponents   extends Component{

    // progression 1
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    // Progression 2

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // Progression 3

    usertype=() => {
        const data = this.state.userData;
        const Render= data.filter((item) => {
            return item.user_type == 'Designer';
        }).map((item)=>(
            <div key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
            </div>)
        ) 
        return Render 
    }

    // Progression 4

    Letter= () => {
        const data = this.state.userData;
        const Render= data.filter((item)=>{
          return item.name[0] == "J";
        }).map((item)=>(
          <React.Fragment key={item.id}>
              <li className="list-elements">
                  <span>Id: {item.id} </span>
                  <span>Name : {item.name}  </span>
                  <span>User Type: {item.user_type} </span>
              </li>
          </React.Fragment>)
      
        );
      
        return Render;
      }

        Donage = () => {
        const data = this.state.userData;
        const Render= data.filter((item) =>{
            return item.age > 28 && item.age <=50
        }).map((item)=>(
        <div key={item.id}>
        <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>
        </div>)
        )
        return Render;
     } 

        TotalAge = () => {

        const data = this.state.userData;
        const reduce = data.reduce((firstvalue, currentValue)=>{
          if(currentValue.user_type=="Designer"){
            firstvalue+=currentValue.years;
          }
      
          return firstvalue;
      
        },0)
      
        return reduce;
      }

    render(){
        return(
            <div>
            <div>
            <h1>Display all items</h1>
            <div className="BOX">
            <ul>{this.renderItems()} </ul>
            </div>                
            </div>

            <div>
                <h1>Display based on user type</h1>
                <div className="BOX">
                    <ul>{this.usertype()}</ul>
                </div>
            </div>


            <div>
                <h1>Filter all data starting with J </h1>
                <div className="BOX">
                <ul>{this.Letter()} </ul>
                </div>
            </div>

            <div>
                <h1>Filter all data based on age greater than 28 and less than or equal to 50 </h1>
                <div className="BOX">
                <ul>{this.Donage()} </ul>
                </div>
            </div>
            
            <React.Fragment>
                <h1>Find the total years of the designers </h1>
                <div className="BOX">
                <ul>{this.TotalAge()} </ul>
                </div>
            </React.Fragment>


            </div>

            
        );
    };


            
        


}