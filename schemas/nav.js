import Tabs from "sanity-plugin-tabs"

import nav from './langScheme/nav'

export default {
  type: "document",
  title: `Navigace`,
  name: `nav`,
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
          fields: nav
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: nav
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: nav
        },
      ],
    }
  ]
}
