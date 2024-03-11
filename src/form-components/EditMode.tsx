import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }

    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-editing-check"
                label="Want to edit name?"
                checked={isEditing}
                onChange={updateEditStatus}
            />
            <div>
                {name} is {isStudent ? "a student" : "not a student"}
            </div>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Are they a student?"
                checked={isStudent}
                onChange={updateStudentStatus}
                hidden={!isEditing}
            />
            <Form.Group controlId="name-box">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
                    hidden={!isEditing}
                />
            </Form.Group>
        </div>
    );
}
