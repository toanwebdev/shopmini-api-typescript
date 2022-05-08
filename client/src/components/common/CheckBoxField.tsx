import { Checkbox, FormControlLabel } from '@mui/material'
import { useField } from 'formik'

interface CheckBoxFieldProps {
	label: string
	name: string
}

const CheckBoxField = ({ ...props }: CheckBoxFieldProps) => {
	const [field] = useField(props)

	return (
		<FormControlLabel
			control={<Checkbox {...field} {...props} />}
			label={props.label}
		/>
	)
}

export default CheckBoxField
