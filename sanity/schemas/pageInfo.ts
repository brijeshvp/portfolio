import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    // for name in type-writer quotes in hero section
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    // for Software Engineer - in hero section
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    // for circled-image in hero section
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // for about info
    defineField({
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    }),
    // for profile pic beside about info
    defineField({
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // for phone number in contact page
    defineField({
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    }),
    // for email in contact page
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    // for address in contact page
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    // for social icons - array
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
})
