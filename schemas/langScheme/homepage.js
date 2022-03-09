import Tabs from "sanity-plugin-tabs"

import CountInput from '../../inputs/CountInput'
import LinkInput from '../../inputs/LinkInput'
import SelectLink from '../../inputs/SelectLink'

export default [

  {
    type: "string",
    name: "title",
    title: "Úvodní nadpis"
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
        type: "file",
        name: "videoFile",
        title: "Video"
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
    title: 'Sekce firem',
    name: 'firmArr',
    type: 'array',
    of: [
      {
        type: "object",
        name: "firm",
        title: "Firma",
        fields: [
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
            type: "blockContent",
            name: "content",
            title: "Text"
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
            type: "image",
            name: "background",
            title: "Pozadí",
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
        ],
        preview: {
          select: {
            title: 'logo.caption',
            media: 'logo'
          }
        }
      },
    ]
  },
  {
    type: "object",
    name: "secSuccess",
    title: "Sekce úspěchů",
    fields: [
      {
        type: "string",
        name: "title",
        title: "Nadpis"
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
                name: "number",
                title: "Číslo"
              },
              {
                type: "string",
                name: "title",
                title: "Text"
              },
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
]
