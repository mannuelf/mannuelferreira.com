export const state = () => ({
  aboutMe: []
})

export const mutations = {
  getData (state, text) {
    state.aboutMe({
      text: 'hello from state'
    })
  }
}
