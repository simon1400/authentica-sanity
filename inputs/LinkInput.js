import React, {useState, useEffect} from 'react'

// Important items to allow form fields to work properly and patch the dataset.
import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

// Import the TextInput from UI
import {TextInput, Flex, Card, Text, Select} from '@sanity/ui'

const LinkInput = React.forwardRef((props, ref) => {

  const { type, onChange } = props
  console.log(props);

  return(
    <FormField label={type.title} description={type.description}>
      <TextInput
        type="text"
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        onChange={event => onChange(PatchEvent.from(set(event.target.value)))}
      />
    </FormField>
  )

})

export default LinkInput
