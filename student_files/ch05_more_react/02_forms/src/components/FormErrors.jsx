import React from 'react';


export default class FormErrors extends React.Component {
    render(){
        let list = this.props.formErrors.map((errMsg, idx) => {
            if(errMsg)
                return <li key={idx}>{errMsg}</li>
        });

        return (
          <ul className="error-msgs">
              {list}
          </ul>
        );
    }
}