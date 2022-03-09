import Tabs from "sanity-plugin-tabs"
import CountInput from '../../inputs/CountInput'

export default [
  {
    title: 'Google Tag Manager id',
    name: 'gtm',
    type: 'string',
  },
  {
    title: 'Koncovka titulku',
    name: 'endTitle',
    type: 'string',
  },
  {
    title: '404',
    name: 'notFound',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Nadpis',
        type: 'string'
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text'
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
    ]
  },
  {
    title: 'Strukturovaná data',
    name: 'std',
    type: 'object',
    fields: [
      {
        type: "string",
        name: "title",
        title: "Název",
      },
      {
        type: "image",
        name: "image",
        title: "Obrázek"
      },
      {
        type: "string",
        name: "phone",
        title: "Telefon",
      },
      {
        type: "string",
        name: "email",
        title: "E-mail",
      },
      {
        type: "string",
        name: "street",
        title: "Ulice a číslo domu",
      },
      {
        type: "string",
        name: "city",
        title: "Lokalita/město",
      },
      {
        type: "string",
        name: "region",
        title: "Oblast/stát",
      },
      {
        type: "string",
        name: "country",
        title: "Země",
      },
      {
        type: "string",
        name: "zip",
        title: "PSČ",
      },
      {
        type: "string",
        name: "url",
        title: "URL",
      },
    ]
  },

]
