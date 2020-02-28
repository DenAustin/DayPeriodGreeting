import React, { Component } from 'react'



let greeting ,className

   let period = new Date().getHours()
   console.log(period)
   switch(true){
      case(period < 12):
         greeting = "Wake up and smell the coffee, pal. Hyvää huomentaa";
         className = "sunRise";
         break;
      case(period >= 12):
         greeting = "Hello good people. It's noon day. Good Afternoon";
         className = "NoonDay";
         break;
      case(period >= 16):
         greeting = "Good Evening, guys. Let the sundowner begin";
         className = "PmDawn";
         break;
      default:
         greeting = "Hi"
   }
console.log(greeting)

export class DateTime extends Component {

   constructor(){
      super()
   this.state = {time: new Date(),
   greeting: greeting, className:className}
}
currentTime (){
   this.setState({
      time: new Date()
      
   })
}
componentWillMount(){
setInterval(() => this.currentTime(), 1000);
}
   render() {
      return (
         <div className={this.state.className}>
            <h1>
               <h1>{this.state.time.toLocaleTimeString()}</h1>
      <h3> It is {this.state.time.toLocaleTimeString()}: {this.state.greeting}</h3>
            </h1>
         </div>
      )
   }
}

export default DateTime

