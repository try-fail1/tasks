import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="mcquestion">
                <Form.Label>Choose Answer</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selected === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
