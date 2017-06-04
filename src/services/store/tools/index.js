import mutations from './tools.mutations'
import actions from './tools.actions'
import getters from './tools.getters'

export default {
  namespaced: true,
  state: {
    tools: [{
        title: 'JIRA',
        desc: 'Project management - using cards to manage team tasks',
        fav: false,
      }, {
        title: 'Wunderlist',
        desc: 'Personal todolist - can setup reminders and multiple lists with tasks',
        fav: false,
      }, {
        title: 'Github Projects',
        desc: 'Project management - board inside Github to organize our issues using cards',
        fav: false,
      }, {
        title: 'Basecamp',
        desc: 'Communication - platform to communicate with team and clients',
        fav: false,
      }, {
        title: 'Slack',
        desc: 'Team communcation - communicate with your team using fancy emoji. Not like this one :)',
        fav: false,
      }],
    favourite: ''
  },
  actions,
  mutations,
  getters
}