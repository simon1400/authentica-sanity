import Tabs from "sanity-plugin-tabs"

import benefits from './langScheme/benefits'

export default {
  type: "document",
  title: `Vyhody`,
  name: `benefits`,
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
          fields: benefits
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: benefits
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: benefits
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'content.cs.title'
    }
  }
}
