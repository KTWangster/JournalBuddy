import React, { Component } from 'react';
import './Entry.css';
import PropTypes from 'prop-types';

class Entry extends Component {

    constructor(props){
        super(props);
        this.entryContent = props.entryContent;
        this.entryId = props.entryId;
    }

    render(props){
        return(
            <div className="entry fade-in">
                <p className="noteContent">{ this.entryContent }</p>
            </div>
        )
    }
}

Entry.propTypes = {
    entryContent: PropTypes.string
}

export default Entry;