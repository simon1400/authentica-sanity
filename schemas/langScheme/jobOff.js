import Tabs from "sanity-plugin-tabs"
import CountInput from '../../inputs/CountInput'

export default (local) => ( [
  {
    title: 'Úvodní nadpis',
    name: 'title',
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
    title: 'Vyhody',
    name: 'benefits',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'benefitChapter',
        title: 'Benefit',
        fields: [
          {
            type: 'string',
            name: 'string',
            title: 'Nazev'
          },
          {
            type: 'array',
            name: 'benefits',
            title: 'Benefit',
            of: [{
              type: "reference",
              to: [{type: "benefits"}]
            }]
          }
        ]
      }
    ]
  },
  {
    title: 'Lide',
    name: 'peoples',
    type: 'array',
    of: [{
      type: "reference",
      name: "people",
      to: [{type: "people"}]
    }]
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
