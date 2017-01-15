import React from "react";


export default class Modal extends React.Component {
   constructor(){
      super();
   }

   createTodo(){
      this.props.action();
   }
   updateValue(event){

      const field_key = event.target.id;
      const field_value = event.target.value;

      this.props.updateValue(field_key,field_value)
   }

  render() {
    const {hidden,inputFields, buttons, text, action, updateValue  } = this.props;

    const inputs = [];
    for(const key of Object.keys(inputFields)){

      inputs.push(
         <div key={key} class="form-group">
           <label for={key}>{key}</label>
           <input value={inputFields[key]} onChange={this.updateValue.bind(this)} type="text" class="form-control" id={key}></input>
         </div>
      )
   }

    return (

      <div>
        <button type="button" class={hidden ? "btn btn-primary hidden":"btn btn-primary"} data-toggle="modal" data-target="#myModal">{buttons.openModal}</button>

        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">

            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">{text.header}</h4>
              </div>
              <div class="modal-body">
                {inputs}
               <button onClick={this.createTodo.bind(this)} type="button" class="btn btn-default" data-dismiss="modal">{buttons.action}</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">{buttons.close}</button>
              </div>
            </div>

          </div>
        </div>
        </div>
    );
  }
}
