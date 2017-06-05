export default {
  setToolsAction(context, { allTools, fav} ) {
    allTools.forEach(tool => {
      context.commit('setToolFavorite', {
        tool,
        favorite: tool.title === fav.title
      })
    });
 
    context.commit('setToolsMutation', allTools)
    context.commit('setFavouriteMutation', fav) // I think this one isn't needed
  }
}