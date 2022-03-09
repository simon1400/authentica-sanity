import Tabs from "sanity-plugin-tabs"

import articleScheme from './langScheme/article'

export default {
  type: "document",
  title: `Články`,
  name: `article`,
  fields: [
    {
      name: "content",
      type: "object",
      inputComponent: Tabs,

      fieldsets: [
        { name: "csLang", title: "Cs", options: { sortOrder: 10 } },
        { name: "enLang", title: "En", options: { sortOrder: 20 } },
        { name: "deLang", title: "De", options: { sortOrder: 30 } },
      ],
      // options: {
      //   layout: "object"
      // },

      fields: [
        {
          type: "object",
          name: "cs",
          title: " ",
          fieldset: "csLang",
          fields: articleScheme('cs')
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: articleScheme('en')
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: articleScheme('de')
        },
      ]
    }
  ],
  preview: {
    select: {
      title: 'content.cs.title',
      media: 'content.cs.logo'
    }
  }
}
