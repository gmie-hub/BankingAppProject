import React from "react";
import { Form } from "react-bootstrap";

const Input = ({label, type, value, inputClass, labelId, inputId, placeholder, maxlength, labelClass, onChange}) => {
    // const [gender, setGender] = React.useState('female');
    const input = ['text', 'number', 'email', 'password', 'tel', 'date'];
    const genderOptions = [
        {
            label: 'Male', 
            value: 'male'
        },
        {
            label: 'Female',
            value: 'female'
        }
    ]
    return(
        <React.Fragment>
            <label className={`${labelClass} form-label fs-4`}>{label}</label>
            {input.indexOf(type) !== -1 && (
                <input className={`${inputClass} form-control fs-4 input`}
                    id={inputId} placeholder={placeholder} value={value}
                    type={type} maxLength={maxlength}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
            {type === "select" && (
                <Form.Group>
                    <Form.Select
                        id={inputId} className="form-select input" onChange={(e) => onChange(e.target.value)}
                        value={value}
                    >
                        {
                            genderOptions.map((x, index) => {
                                return <option key={index} value={x.value}>{x.label}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group> 
            )}
        </React.Fragment>
    );
}   

export default Input;