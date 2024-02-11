import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "./img.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript | Ryan
                            Ryan Vink | Hello World
                        </header>
                        <ul>
                            <li>First thing</li>
                            <li>Another thing</li>
                            <li>A third item</li>
                        </ul>
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <h1 className="App-header">Hello!!</h1>

                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <img
                            src={logo}
                            alt="Can't load"
                            width="200"
                            height="auto"
                        />
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
