export const state = () => ({
  profiles: [],
  skills: [],
  services: [],
})

export const mutations = {
  setProfiles(state, profiles) {
      state.profiles = profiles
  },
  setSkills(state, skills) {
    state.skills = skills
  },
  setServices(state, services) {
    state.services = services
  },
}

export const actions = {
  setProfilesAction(context, payload){
    context.commit("setProfiles", payload)
  },
  setSkillsAction(context, payload){
    context.commit("setSkills", payload)
  },
  setServicesAction(context, payload){
    context.commit("setServices", payload)
  },
}
