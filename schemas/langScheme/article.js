import Tabs from "sanity-plugin-tabs"
import CountInput from '../../inputs/CountInput'

export default (local) => ([
  {
    type: "string",
    name: "title",
    title: "Úvodní nadpis"
  },
  {
    type: "slug",
    name: "slug",
    title: "Slug",
    options: {
      source: 'content.'+local+'.title'
    }
  },
  {
    type: "image",
    name: "logo",
    title: "Logo",
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
    name: "media",
    type: "object",
    inputComponent: Tabs,
    fieldsets: [
      { name: "video", title: "Video" },
      { name: "image", title: "Obrázek" },
    ],
    options: {
      layout: "object"
    },
    fields: [
      {
        fieldset: "image",
        type: "image",
        title: 'Obrázek',
        name: "iamge",
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
        fieldset: "video",
        type: "string",
        name: "video",
        title: "Youtube video id"
      }
    ]
  },
  {
    type: "blockContent",
    name: "content",
    title: "Hlavní text"
  },
  {
    type: "object",
    name: "button",
    title: "CTA",
    fields: [
      {
        type: "string",
        name: "name",
        title: "Text tlačítka"
      },
      {
        name: "cta",
        type: "object",
        inputComponent: Tabs,
        fieldsets: [
          { name: "inter", title: "Interní link" },
          { name: "exter", title: "Externí link" },
          { name: "mail", title: "E-mail" },
        ],
        options: {
          layout: "object"
        },
        fields: [
          {
            fieldset: "inter",
            type: "reference",
            name: "linkInter",
            title: "Odkaz",
            to: [{type: 'article'}]
          },
          {
            fieldset: "exter",
            type: "string",
            title: "Odkaz",
            name: "linkExter",
          },
          {
            fieldset: "mail",
            type: "string",
            title: "Odkaz",
            name: "linkMail",
          },
        ]
      },
    ]
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
    type: "object",
    name: "partners",
    title: "Sekce partnerů",
    fields: [
      {
        type: "string",
        name: "title",
        title: "Nadpis"
      },
      {
        title: 'Loga',
        name: 'logo',
        type: 'array',
        of: [
          {
            type: "image",
            name: "image",
            title: "Logo partnera",
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
        ]
      }
    ]
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
