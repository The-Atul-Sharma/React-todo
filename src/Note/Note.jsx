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
            <li className="list-group-item ">
                {this.noteContent}
                <button type="button" className="close" onClick={() => this.handleRemoveNote(this.noteId)}>&times;</button>
            </li>     
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
