import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
//export sanity client
export const client = sanityClient({
    projectId: "bs330pb0",
    dataset: "production",
    useCdn: true,
    token: 'skHFW1UCDvaJ2kjv0bKvwKb3FV8IyiSlMw3aEN9pCOH5VtkymuhVkGGS9XOq4LT7e4YyQSeGnHWcZjk5OkPkTDWUc5XoLr9uTdDhrf1TAzeNhHDUdtrXzbid2O64m1kZTpqakndVEN4zGSMvsTHThFkeUgkxG2jv32ShH8DCdYC4a7SaLdrg'
})
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);