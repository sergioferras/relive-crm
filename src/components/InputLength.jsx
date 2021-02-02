import React, { useState, useEffect } from "react"
import InputBase from '@material-ui/core/InputBase'

export default function InputLength(props) {

    const { loading, multiline, defaultValue, name = '', min, max = 9999, placeholder } = props
    const [currLen, setCurrLen] = useState(defaultValue ? defaultValue.length : 0)

    const changeLen = (e) => {
        e.preventDefault()
        const val = e.target.value
        setCurrLen(val.length)
    }

    return (
        <InputBase
            defaultValue={defaultValue}
            onChange={e => changeLen(e)}
            margin="dense"
            name={name}
            type="text"
            multiline={multiline}
            variant="outlined"
            placeholder={placeholder}
            rows={4}
            rowsMin={4}
            rowsMax={10}
            disabled={loading}
            endAdornment={<span style={{ padding: '8px', color: currLen < min || currLen > max ? 'crimson' : 'green' }}>
                {`${currLen}/${min}`}
            </span>}
        />
    )
}