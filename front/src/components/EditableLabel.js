import React from 'react';

export class EditableLabel extends React.Component {

  constructor(props){
    super(props);
    this.labelClicked = this.labelClicked.bind(this);
    this.inputLostFocus = this.inputLostFocus.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  state = {
    	editing: false,
      text: this.props.text
  };

	labelClicked = () => {
  	this.setState({ editing: true });
  };
  
  textChanged = () => {
  	this.setState({ text: this.refs.textInput.value});
  };
  
  inputLostFocus = () => {
  	this.setState({ editing: false }); 
    console.log(this.props.submit)
    if (this.props.submit)  
      this.props.submit(this.state.text);
  };
  
  keyPressed(event) {
  	if(event.key === 'Enter') {
    	this.inputLostFocus();
    }
  };

  render = () => {
  	if(this.state.editing)
    	return <input 
      	ref='textInput'
        type='text'
        onChange={this.textChanged}
        onBlur={this.inputLostFocus}
        onKeyPress={this.keyPressed}
        value={this.state.text}
        autoFocus
     	/>;

		return <div onClick={this.labelClicked} >{this.state.text}</div>;
  }
}
