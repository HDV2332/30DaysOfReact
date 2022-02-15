import options from './options'

const selectOptions = options.map(({ value, label }) => (
    <option key={label} value={value}>
        {' '}
        {label}
    </option>
))

export default selectOptions