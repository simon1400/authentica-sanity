// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import homepage from './homepage'
import article from './article'
import nav from './nav'
import footer from './footer'
import settings from './settings'
import jobOff from './jobOff'
import job from './job'
import category from './category'
import blockContent from './blockContent'
import blogItem from './blog'
import blogSort from './blogSort'
import people from './people'
import benefits from './benefits'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    blogItem,
    jobOff,
    article,
    nav,
    footer,
    settings,
    job,
    blogSort,
    category,
    blockContent,
    people,
    benefits
  ]),
})
