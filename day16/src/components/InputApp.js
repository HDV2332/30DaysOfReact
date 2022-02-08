import React from 'react'
import { Input } from "./Input";
import withStylesInput from "./withStylesInput";

const CheckboxInput = withStylesInput(Input, 'checkbox')
const ColorInput = withStylesInput(Input, 'color')
const DateInput = withStylesInput(Input, 'date')
const DatetimeInput = withStylesInput(Input, 'datetime-local')
const FileInput = withStylesInput(Input, 'file')
const PasswordInput = withStylesInput(Input, 'password')
const RangeInput = withStylesInput(Input, 'range')
const SubmitInput = withStylesInput(Input, 'submit')

class InputApp extends React.Component {
    render() {
        return (
            <div className='input-app'>
                <h3>Input App</h3>
                <CheckboxInput />
                <ColorInput />
                <DateInput />
                <DatetimeInput />
                <FileInput />
                <PasswordInput />
                <RangeInput />
                <SubmitInput />
            </div>
        )
    }
}

export default InputApp