import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("0");
    return (
        <div>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(
                        Number.isNaN(parseInt(attemptsReq))
                            ? attemptsLeft
                            : parseInt(attemptsReq) + attemptsLeft
                    )
                }
            >
                gain
            </Button>
            <Form.Group controlId="attempts">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsReq(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            {attemptsLeft}
        </div>
    );
}
