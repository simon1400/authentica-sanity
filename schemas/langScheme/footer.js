import Tabs from "sanity-plugin-tabs"

export default [
  {
    type: "string",
    name: "title",
    title: "Úvodní nadpis"
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
        type: "string",
        name: "exterLink",
        title: "Extenrni link/Mailto:"
      }
    ]
  },
  {
    title: 'Sloupce adres',
    name: 'addreses',
    type: 'array',
    of: [
      {
        type: "object",
        name: "address",
        title: "Adresa",
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
        ]
      },
    ]
  },
  {
    title: 'Loga firem',
    name: 'logos',
    type: 'array',
    of: [
      {
        type: "object",
        name: "logo",
        title: "Logo",
        fields: [
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
            type: "object",
            name: "button",
            title: "CTA",
            fields: [
              {
                type: "string",
                name: "exterLink",
                title: "Extenrni link/Mailto:"
              }
            ]
          },
        ],
        preview: {
          select: {
            title: 'image.caption',
            media: 'image'
          }
        }
      },
    ]
  },
]
