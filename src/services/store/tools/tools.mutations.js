export default {
  setFavouriteMutation (state, favTool) {
    state.favourite = favTool
  },
  setToolsMutation (state, tools) {
    state.tools = tools
  },
  setToolFavorite (state, { tool, favorite }) {
    // Fetch that specific tool
    const toolInState = state.tools.filter(t => t.title === tool.title)[0];
    toolInState.fav = favorite;
  }
}