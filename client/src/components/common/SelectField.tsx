import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useField } from 'formik'
import { Option } from '../../interfaces'

interface SelectFieldProps {
	label: string
	name: string
	options: Option[]
}

const SelectField = ({ options, ...props }: SelectFieldProps) => {
	const [field] = useField(props)

	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>{props.label}</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				{...field}
				id={field.name}
				{...props}>
				<MenuItem value=''>{props.label}</MenuItem>
				{options.map((option) => (
					<MenuItem key={`select-item-${option.id}`} value={option.id}>
						{option.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default SelectField
