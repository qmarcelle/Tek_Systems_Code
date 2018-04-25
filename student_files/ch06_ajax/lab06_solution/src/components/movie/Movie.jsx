import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Poster from './Poster.jsx';


export default class Movie extends React.Component {
    render() {
        return (
            <li>
                <Grid>
                    <Row>
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <h2>{this.props.title}</h2>
                            <span>Release Date:</span><time>{this.props.release_date}</time>
                            <p>{this.props.overview}</p>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Poster path={ this.props.poster_path } />
                        </Col>
                    </Row>
                </Grid>
            </li>
        );
    }
}
