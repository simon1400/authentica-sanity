import Tabs from "sanity-plugin-tabs"

import people from './langScheme/people'

export default {
  type: "document",
  title: `Lide`,
  name: `people`,
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
          fields: people("cs")
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: people("en")
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: people("de")
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'content.cs.name'
    }
  }
}
