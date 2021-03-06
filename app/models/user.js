import DS from 'ember-data'

const {
  Model,
  attr,
  hasMany
} = DS

export default Model.extend({
  contributions: hasMany('contribution'),
  website: attr('string'),
  picture: attr('string'),
  name: attr('string'),
  company: attr('string'),
  admin: attr('boolean', { defaultValue: false })
})
