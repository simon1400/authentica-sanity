export default [
  {
    title: 'Hlavní menu',
    name: 'topNav',
    type: 'array',
    of: [
      {
        type: "object",
        name: "nav",
        title: "Hlavní menu",
        fields: [
          {
            type: "string",
            name: "title",
            title: "Název",
            validation: Rule => Rule.required().error('Toto pole je povinné.')
          },
          {
            type: "reference",
            name: "link",
            title: "Odkaz",
            to: [
              {type: "article"},
              {type: "jobOff"},
              {type: "category"},
            ],
            validation: Rule => Rule.required().error('Toto pole je povinné.')
          },
        ]
      },
    ]
  },
  {
    title: 'Sekundární menu',
    name: 'secNav',
    type: 'array',
    of: [
      {
        type: "object",
        name: "nav",
        title: "Sekundární menu",
        fields: [
          {
            type: "string",
            name: "title",
            title: "Název",
            validation: Rule => Rule.required().error('Toto pole je povinné.')
          },
          {
            type: "reference",
            name: "link",
            title: "Odkaz",
            to: [
              {type: "article"},
              {type: "jobOff"},
              {type: "category"}
            ],
            validation: Rule => Rule.required().error('Toto pole je povinné.')
          },
        ]
      },
    ]
  },
]
