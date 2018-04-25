import React from 'react';
import AlertContainer from 'react-alert';
import {Grid, Row, Col} from 'react-bootstrap';

import ResultsContainer from './results/ResultsContainer.jsx';
import FormContainer from './form/FormContainer.jsx';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert(msg){ this.toaster.show(msg); }

    render(){
        return (
            <div>
                <AlertContainer ref={ac => this.toaster = ac }  />
                <Grid>
                    <Row>
                        <Col lg={5} md={12} sm={12} xs={12}>
                            <FormContainer show={this.showAlert} />
                        </Col>
                        <Col  lg={7} md={12} sm={12} xs={12}>
                            <ResultsContainer />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
