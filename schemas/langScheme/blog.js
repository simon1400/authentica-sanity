import Tabs from "sanity-plugin-tabs"
import CountInput from '../../inputs/CountInput'

export default (local) => ( [
  {
    title: 'Úvodní nadpis',
    name: 'title',
    type: 'string',
    validation: Rule => Rule.required()
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
    type: "image",
    name: "image",
    title: "Obrázek",
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
    title: 'Hlavní text',
    name: 'content',
    type: 'blockContent',
  },
  {
    title: 'Kapitoly',
    name: 'chapters',
    type: 'array',
    of: [
      {
        type: "object",
        name: "chapter",
        title: "Kapitola",
        fields: [
          {
            type: "string",
            name: "title",
            title: "Nadpis"
          },
          {
            title: 'Dark mode',
            name: 'dark',
            type: 'boolean'
          },
          {
            type: "blockContent",
            name: "content",
            title: "Text"
          },
          {
            title: 'Obrázky',
            name: 'images',
            type: 'array',
            of: [
              {
                type: "image",
                name: "image",
                title: "Obrázek",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'string',
    name: 'publicInfo',
    title: 'Publikační info'
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
