// import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <RichText render={content} />
      </div>
    </div>
  )
}
