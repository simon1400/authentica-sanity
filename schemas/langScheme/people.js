import Tabs from "sanity-plugin-tabs"
import CountInput from '../../inputs/CountInput'

export default (local) => ( [
  {
    title: 'Jmeno',
    name: 'name',
    type: 'string',
  },
  {
    type: "image",
    name: "image",
    title: "Obrazek",
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Alt text',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      },
      {
        // Editing this field will be hidden behind an "Edit"-button
        name: 'attribution',
        type: 'string',
        title: 'Title text',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      }
    ]
  },
  {
    title: 'Funkce',
    name: 'function',
    type: 'string',
  },
  {
    title: 'Text',
    name: 'text',
    type: 'string',
  },
])
