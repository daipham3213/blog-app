import { TextField } from '@material-ui/core';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    sizeString?: 'medium' | 'small';
}

export function InputField({ name, control, label, sizeString, ...inputProps }: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });


    return (
        <TextField
            fullWidth
            margin='normal'
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label={label}
            variant='outlined'
            inputRef={ref}
            error={invalid}
            helperText={error?.message}
            inputProps={inputProps}
            size={sizeString ?? 'small'}
        />
    );
}
