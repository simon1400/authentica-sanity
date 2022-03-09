import Tabs from "sanity-plugin-tabs"

import category from './langScheme/category'

export default {
  type: "document",
  title: `Category`,
  name: `category`,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Úvodní nadpis",
      hidden: true
    },
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
          fields: category('cs')
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: category('en')
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: category('de')
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'content.cs.title',
    }
  }
}
