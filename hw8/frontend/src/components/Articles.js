import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindFetchFeedToDispatch} from './profileActions'


class Articles extends Component {

  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    const {articles} = this.props
    console.log("articles are ", articles)

    return (
      <div>
        {articles.map(article => (
          <div key={article.id}>
            <p>By {article.author}</p>
            <p>Posted at {article.date}</p>
            <p>{article.text}</p>
            <p>Comments: {article.comments}</p>
          </div>

        ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    articles: state.articles
  }),
  dispatch => ({
    fetchArticles: bindFetchFeedToDispatch(dispatch)
  })
)(Articles)
