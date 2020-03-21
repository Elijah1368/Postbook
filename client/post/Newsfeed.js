import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import auth from './../auth/auth-helper'
import PostList from './PostList'
import {listNewsFeed} from './api-post.js'
import NewPost from './NewPost'

const styles = theme => ({
  card: {

  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  media: {
    minHeight: 330
  },
  loading: {
    textAlign: 'center',
    fontSize: '2vw'
  }
})
class Newsfeed extends Component {
  state = {
      posts: [],
      loadingPosts: true
  }
  loadPosts = () => {
    const jwt = auth.isAuthenticated()
    listNewsFeed({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({posts: data})
        this.setState({loadingPosts: false})
      }
    })
  }
  componentDidMount = () => {
    this.loadPosts()
  }
  addPost = (post) => {
    const updatedPosts = this.state.posts
    updatedPosts.unshift(post)
    this.setState({posts: updatedPosts})
  }
  removePost = (post) => {
    const updatedPosts = this.state.posts
    const index = updatedPosts.indexOf(post)
    updatedPosts.splice(index, 1)
    this.setState({posts: updatedPosts})
  }
  render() {
    const {classes} = this.props
    return (
      <Card className={classes.card}>
        <Divider/>
        <NewPost addUpdate={this.addPost}/>
        <Divider/>
        {!this.state.loadingPosts && 
        <PostList removeUpdate={this.removePost} posts={this.state.posts}/>}
        {this.state.loadingPosts &&  <Typography className={classes.loading}>Loading Posts...</Typography>}
      </Card>
    )
  }
}
Newsfeed.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Newsfeed)
