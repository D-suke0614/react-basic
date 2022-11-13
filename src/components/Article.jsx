import { useState } from 'react';
import { Title, Content, PublishButton } from './index'

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(!isPublished)
  }
  return (
    <div>
      <Title title={props.title} />
      <Content
        content={props.content}
        date={props.date}
      />
      <PublishButton
        isPublished={isPublished}
        onClick={publishArticle}
      />
    </div>
  );
};

export default Article;
