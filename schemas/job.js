import Tabs from "sanity-plugin-tabs"

import job from './langScheme/job'

export default {
  type: "document",
  title: `Prehled pracovnich pozic`,
  name: `job`,
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
          fields: job
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: job
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: job
        },
      ],
    }
  ]
}
