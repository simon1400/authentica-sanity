import Tabs from "sanity-plugin-tabs"
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import jobOff from './langScheme/jobOff'

export default {
  type: "document",
  title: `Pracovní pozice`,
  orderings: [orderRankOrdering],
  name: `jobOff`,
  fields: [

    orderRankField({ type: 'jobOff' }),

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
          fields: jobOff("cs")
        },
        {
          type: "object",
          name: "en",
          title: " ",
          fieldset: "enLang",
          fields: jobOff("en")
        },
        {
          type: "object",
          name: "de",
          title: " ",
          fieldset: "deLang",
          fields: jobOff("de")
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
