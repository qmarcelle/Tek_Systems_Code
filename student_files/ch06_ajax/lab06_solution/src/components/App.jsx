import React from 'react';
import AlertContainer from 'react-alert';
import {Grid, Row, Col} from 'react-bootstrap';

import MovieListContainer from './movie/MovieListContainer.jsx'
import SearchFormContainer from './search/SearchFormContainer.jsx'


class App extends React.Component{
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
                        <Col lg={5} md={4} sm={12} xs={12}>
                            <SearchFormContainer show={this.showAlert} />
                        </Col>
                        <Col  lg={7} md={8} sm={12} xs={12}>
                            <MovieListContainer />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export { App };
