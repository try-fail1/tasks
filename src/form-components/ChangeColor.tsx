import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    const COLORS = [
        "orange",
        "blue",
        "green",
        "red",
        "purple",
        "yellow",
        "pink",
        "brown"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    key={color}
                    name="Colors"
                    onChange={updateColor}
                    id="response-good"
                    label={
                        <span style={{ backgroundColor: `${color}` }}>
                            {color}
                        </span>
                    }
                    value={color}
                />
            ))}
            {"You have chosen "}
            <span
                style={{ backgroundColor: `${color}` }}
                data-testid="colored-box"
            >
                {color}
            </span>
        </div>
    );
}
