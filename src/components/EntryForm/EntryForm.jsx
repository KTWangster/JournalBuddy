import React, { Component } from 'react';
import './EntryForm.css';

class EntryForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newEntryContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeEntry = this.writeEntry.bind(this);
    }

    // When user input changes, sets newEntryContent to value of of input box contents.
    handleUserInput(e){
        this.setState({
            newEntryContent: e.target.value, // Value of the text input.
        })
    }

    writeEntry(){
        // Calls a method that sets the entryContent for an entry to the input value.
        this.props.addEntry(this.state.newEntryContent);

        // Sets newEntryContent back to empty string.
        this.setState({
            newEntryContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="entryInput" 
                placeholder="Write a new entry......"
                value={this.state.newEntryContent}
                onChange={this.handleUserInput} />
                <button className="entryButton" 
                onClick={this.writeEntry}>Add Another Entry</button>
            </div>
        )
    }
}

export default EntryForm;