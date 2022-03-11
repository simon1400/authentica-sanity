export default [
  {
    title: 'Nazev',
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
]
