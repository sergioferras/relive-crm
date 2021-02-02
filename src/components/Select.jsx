import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


export default function CustomizedSelects(props) {
    const { options = [], name = '', updateData, val = '', loading } = props

    const defaultValue = options.length > 0 ? options[0].val : null

    const handleChange = (e) => {
        e.preventDefault()
        if (name === 'district')
            updateData({ [name]: e.target.value, county: null })
        else
            updateData({ [name]: e.target.value })
    }

    return (
        <FormControl /* variant="outlined" */>
            <Select
                disabled={loading}
                defaultValue={defaultValue}
                value={val}
                onChange={handleChange}
                inputProps={{
                    name: name
                }}
            >
                {options.map(o => <MenuItem key={o.label} value={o.val}>{o.label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
