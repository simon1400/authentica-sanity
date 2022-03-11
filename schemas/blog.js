import Tabs from "sanity-plugin-tabs"

import blog from './langScheme/blog'

export default {
  type: "document",
  title: `Příspěvky v blogu`,
  name: `blogItem`,
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
          fields: blog("cs")
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: blog("en")
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: blog("de")
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