export const state = () => ({
  profiles: [],
  skills: [],
  services: [],
  works: [],
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
  setWorks(state, works) {
    state.works = works
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
  setWorksAction(context, payload){
    context.commit("setWorks", payload)
  },
}
