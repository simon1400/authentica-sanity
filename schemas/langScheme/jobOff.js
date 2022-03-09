import Tabs from "sanity-plugin-tabs"
import CountInput from '../../inputs/CountInput'

export default (local) => ( [
  {
    title: 'Úvodní nadpis',
    name: 'title',
    type: 'string',
  },
  {
    title: 'Slug',
    name: 'slug',
    type: 'slug',
    options: {
      source: 'content.'+local+'.title'
    }
  },
  {
    title: 'Hlavní text',
    name: 'content',
    type: 'blockContent',
  },
  {
    title: 'Popis',
    name: 'description',
    type: 'blockContent',
  },
  {
    title: 'E-mail',
    name: 'email',
    type: 'string',
  },
  {
    title: 'Telefon',
    name: 'phone',
    type: 'string',
  },
  {
    type: "object",
    name: "meta",
    title: "Meta",
    fields: [
      {
        type: "string",
        name: "title",
        title: "Titulek",
        count: 55,
        inputComponent: CountInput
      },
      {
        type: "string",
        name: "description",
        title: "Popisek",
        count: 150,
        inputComponent: CountInput
      },
      {
        type: "string",
        name: "ogTitle",
        title: "Og titulek",
        count: 95,
        inputComponent: CountInput
      },
      {
        type: "string",
        name: "ogDescription",
        title: "Og popisek",
        count: 200,
        inputComponent: CountInput
      },
      {
        type: "image",
        name: "image",
        title: "Og obrázek"
      },
    ]
  },
])
