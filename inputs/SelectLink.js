import React, {useState} from 'react'

// Important items to allow form fields to work properly and patch the dataset.
import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

// Import the TextInput from UI
import {TextInput, Flex, Card, Text, Select} from '@sanity/ui'

const SelectLink = React.forwardRef((props, ref) => {

  const { type, onChange } = props

  return(
    <Select
      ref={ref}
      fontSize={[2, 2, 2, 2]}
      padding={[3, 3, 3]}
      space={[3, 3, 4]}
      onChange={e => onChange(PatchEvent.from(set(e.target.value)))}
      value={props.value}
    >
      <option value="inter">Interní link</option>
      <option value="exter">Externí link</option>
      <option value="mail">E-mail</option>
    </Select>
  )

})

export default SelectLink
