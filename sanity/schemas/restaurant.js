export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Restaurant  Image',
      type: 'image',

    }, 
    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',

    },
    {
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',

    },

    {
      name: 'address',
      title: 'Address of Restaurant',
      type : 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter a rating (1-5 stars)',
      type: 'number',
      validation : Rule => Rule.required()
      .min(1)
      .max(5)
      .error("Enter a number btn 1 and 5"),

    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to : [{type:'category'}],
      validation : Rule => Rule.required(),

    },

    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[{type:"reference",to:[{type:'dish'}] }],
      validation : Rule => Rule.required(),

    },
  ],


}
