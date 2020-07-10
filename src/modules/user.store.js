export default {
    state: {
        details: null
    },
    getters: {
        details(state) {
            return state.details;
        }
    },
    mutations: {
        setDetails(state, { details }) {
            state.details = details;
        }
    },
    actions: {
        async addDetails(context, { details }) {
            context.commit({ type: 'setDetails', details })
        },
    }
}