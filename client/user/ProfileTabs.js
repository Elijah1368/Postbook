import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Tabs, { Tab } from 'material-ui/Tabs'
import FollowGrid from './../user/FollowGrid'
import PostList from './../post/PostList'

class ProfileTabs extends Component {
  state = {
    tab: 0,
    posts: []
  }

  componentWillReceiveProps = (props) => {
    this.setState({tab:0})
  }
  handleTabChange = (event, value) => {
    this.setState({ tab: value })
  }

  render() {
    return (
    <div>
        <AppBar position="static" color="default" style={{alignItems:'center'}}>
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Posts" style={{marginRight: '3vw'}}/>
            <Tab label="Following" style={{marginRight: '5vw', marginLeft:'5vw'}}/>
            <Tab label="Followers" style={{marginLeft:'3vw'}}/>
          </Tabs>
        </AppBar>
       {this.state.tab === 0 && <TabContainer><PostList removeUpdate={this.props.removePostUpdate} posts={this.props.posts}/></TabContainer>}
       {this.state.tab === 1 && <TabContainer><FollowGrid people={this.props.user.following}/></TabContainer>}
       {this.state.tab === 2 && <TabContainer><FollowGrid people={this.props.user.followers}/></TabContainer>}
    </div>)
  }
}

ProfileTabs.propTypes = {
  user: PropTypes.object.isRequired,
  removePostUpdate: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 2 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProfileTabs
