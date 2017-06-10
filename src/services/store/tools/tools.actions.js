export default {
  setToolsAction(context, { tools, fav }) {
    tools.forEach(tool => {
      context.commit('setToolFavorite', {
        tool,
        favorite: tool.title === fav.title
      })
    });
 
    context.commit('setToolsMutation', tools)
    context.commit('setFavouriteMutation', fav)
  }
}