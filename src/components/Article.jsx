import { Title, Content } from './index'

const Article = (props) => {
  return (
    <div>
      <Title title={props.title} />
      <Content
        content={props.content}
        date={props.date}
      />
    </div>
  );
};

export default Article;
