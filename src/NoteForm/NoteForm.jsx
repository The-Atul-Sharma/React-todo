import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleEnterClick = this.handleEnterClick.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){ 
        this.setState({
            newNoteContent: e.target.value, // the value of the text input
        })
    }

    handleEnterClick(e) {
        if (e.key === 'Enter') {
          this.writeNote();
        }
    }


    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(
            <div className="form">
                <input type="text"  maxLength="70" placeholder="Add a task..."
                value={this.state.newNoteContent} 
                onChange={this.handleUserInput} 
                onKeyUp={this.handleEnterClick}
                required />
                <button type="submit" onClick={this.writeNote}>+</button>
            </div>
        )
    }
}

export default NoteForm;
