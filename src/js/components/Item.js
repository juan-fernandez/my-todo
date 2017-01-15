import React from "react";


export default class Item extends React.Component {
   constructor(){
      super();
   }

   render() {
      const {content} = this.props;
      const elements = [];
      for(const key of Object.keys(content)){

         elements.push(


            <div key={key} class="panel-body">{content[key]}</div>

         )
      }
      return(
         <div class="panel panel-success">{elements}</div>
      )
   }
}
