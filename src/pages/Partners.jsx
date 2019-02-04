import React, { Component } from 'react';
import Header from "../components/Header";
import rectangle from '../Img/Rectangle-7.1.png';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export default class Partners extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="mt-5">
                    <Card>
                        <h2 className="my-3">CURRENT ADVERT</h2>
                        <Card.Img src={rectangle} id="replace-img-1" alt="Card image" />
                        <Card.Body className="text-right">
                            <Button variant="primary">REPLACE</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <div className="row">
                        <h2 className="ml-3 my-4">PREVIOUS ADVERT</h2>
                        <CardDeck>
                            <div className="col">
                                <Card>
                                    <Card.Img src={rectangle} id="replace-img-1" alt="Card image" />
                                    <Card.Footer>
                                        <div className="row">
                                            <div className=" col text-left">
                                                <Button className="btn" id="replace-1" variant="primary">REPLACE</Button>
                                            </div>
                                            <div className="col text-right">
                                                <Button className="btn" id="delete-1" variant="outline-danger">DELETE</Button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Img src={rectangle} id="replace-img-1" alt="Card image" />
                                    <Card.Footer className="justify-content-between">
                                        <div className="row">
                                            <div className=" col text-left">
                                                <Button className="btn" id="replace-2" variant="primary">REPLACE</Button>
                                            </div>
                                            <div className="col text-right">
                                                <Button className="btn" id="delete-2" variant="outline-danger">DELETE</Button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </CardDeck>
                    </div>

                    <div className="mt-5 row">
                        <CardDeck>
                            <div className="col">
                                <Card>
                                    <Card.Img id="replace-img-1" src={rectangle} alt="Card image" />
                                    <input type="file" id="FileUpload1"/>
                                    <Card.Footer>
                                        <div className="row">
                                            <div className="col text-left">
                                                <Button className="btn" id="replace-3" variant="primary">REPLACE</Button>
                                            </div>
                                            <div className="col text-right">
                                                <Button className="btn" id="delete-3" variant="outline-danger">DELETE</Button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Img src={rectangle} id="replace-img-1" alt="Card image" />
                                    <Card.Footer className="justify-content-between">
                                        <div className="row">
                                            <div className=" col text-left">
                                                <Button className="btn" id="replace-4" variant="primary">REPLACE</Button>
                                            </div>
                                            <div className="col text-right">
                                                <Button className="btn" id="delete-4" variant="outline-danger">DELETE</Button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </CardDeck>
                    </div>
                </div>
            </div>


        )
    }
    
}

    // $('#replace-1').click(function () {
    //     let fileName = $(this).val().split('\\')[$(this).val().split('\\').length - 1];
    //     $('#replace-img-1').attr()({
    //         'src': fileName
    //     })

    // })
