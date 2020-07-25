import React from 'react';
import {Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Functional component</h1>
                <p>Functional components allow you to render info to the page without habing to use or change state.</p>
                <dl>
                    <dt>Presentational</dt>
                    <dd>Often used for simply rendering a small shunk of code to the dom</dd>
                    <dt>No 'this' kwd</dt>
                    <dd>Unlike class components, fiunctional ones dont use this</dd>
                    <dt>No state</dt>
                    <dd>This are 'dumb' components for UI</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
                <h1>Challenge</h1>
                <div className="cardsFC">
                    <Card className="">
                        <CardImg top width="100%" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Arrow Function" />
                        <CardBody>
                            <CardTitle>Fat Arrow Function</CardTitle>
                            <CardSubtitle>A JS Library</CardSubtitle>
                            <CardText>const HelloWorlD = () =></CardText>
                            <Button>Go somewhere man</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Regular Function" />
                        <CardBody>
                            <CardTitle>Regular Ol' Function</CardTitle>
                            <CardSubtitle>A JS Library</CardSubtitle>
                            <CardText>const HelloWorlf = function()</CardText>
                            <Button>Go somewhere, yo</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FunctionalComponentDemo;