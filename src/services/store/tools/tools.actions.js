export default {
  setToolsAction (context, tools) {
    let allTools = tools[0]
    const fav = tools[1]

    for(let i = 0; i < allTools.length; i++) {      
      if(allTools[i].title === fav.title) {
        allTools[i].fav = true
      } else {
        allTools[i].fav = false
      }
    }

    context.commit('setToolsMutation', allTools)
    context.commit('setFavouriteMutation', fav)    
  }
}