import sanityClient from "@sanity/client";

import imageUrlBuilder from '@sanity/image-url';

// connect to sanity
const client=sanityClient({
  projectId: "2i79wwd1", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});

//helper for img url

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
