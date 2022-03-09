import React from 'react'

// Important items to allow form fields to work properly and patch the dataset.
import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

const styled = {
  color: '#66758d',
  textAlign: 'center',
  height: '21px',
  padding: '7px 15px',
}

// Import the TextInput from UI
import {TextInput} from '@sanity/ui'

const CountInput = React.forwardRef((props, ref) => {
  const { type, onChange } = props
  return(
    <FormField label={type.title} description={type.description}>
      <TextInput
        type="text"
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        suffix={<div style={styled}>{props.value ? props.value.length : '0'} z {type.count}</div>}
        onChange={event => {
            onChange(PatchEvent.from(set(event.target.value)))
          }
        }
      />
    </FormField>
  )

})

export default CountInput
