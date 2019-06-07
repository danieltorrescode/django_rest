export default 
{
    state(){
        return{
            task: null
        }
    },

    getters: 
    {
        task : state => state.task,
    },

    mutations: 
    {
        setTask(state, task)
        {
            state.task = task
        },
    },
    actions:{
        task({ commit },task){
            commit('setTask', task)
        }
    }
}
