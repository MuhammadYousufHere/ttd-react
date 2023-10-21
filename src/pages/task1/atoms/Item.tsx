import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface Props extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  label?: string
}

export default function Item({ label, name, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input name={name} type='checkbox' {...rest} />
      </label>
    </div>
  )
}

export { Item }
