import { RichText } from 'prismic-reactjs'
// import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'

export default function PostHeader({ title, slug, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage slug={slug} title={RichText.asText(title)} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
