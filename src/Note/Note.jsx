import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent; 
        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
        <div className="item">
            <p>{this.noteContent}</p>
            <button onClick={() => this.handleRemoveNote(this.noteId)}>&times;</button>
        </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;


