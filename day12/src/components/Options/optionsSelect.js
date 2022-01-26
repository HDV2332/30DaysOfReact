import { options } from "./optionsArray";

export const selectOptions = options.map(({ value, label }) => (
    <option key={value} value={value}> {label}</option>
))