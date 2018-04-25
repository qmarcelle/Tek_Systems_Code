import React from 'react';


export default class ContactSearch extends React.Component {
    render() {
        let {onSubmit, onInputChange, searchVal} = this.props;
        return (
            <div>
                 <form className="search-form" onSubmit={onSubmit}>
                    <span>Enter Contact ID: </span>
                    <input type="text" value={searchVal}
                           onChange={(evt)=> onInputChange(evt.target.value)} />
                    <input type="submit" value="Find Contact" />
                </form>
            </div>
        );
    }
}