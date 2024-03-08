import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ChangeValue {
    value: number;
    setValue: (newValue: number) => void;
}

function Doubler({ value, setValue }: ChangeValue): JSX.Element {
    return <Button onClick={() => setValue(value * 2)}>Double</Button>;
}

function Halver({ value, setValue }: ChangeValue): JSX.Element {
    return <Button onClick={() => setValue(value / 2)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}
