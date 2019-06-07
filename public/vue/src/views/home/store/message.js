
export default 
{
    state(){
        return{
            show: false,
            color: 'error',
            text: 'Error',
            subText: '',
            timeout: 4000
        }
    },

    getters: 
    {
        messageShow:     state => state.show,
        messageColor:    state => state.color,
        messageText:     state => state.text,
        messageSubtext:  state => state.subText,
        messageTimeout:  state => state.timeout,
    },

    mutations: 
    {
        setMessageShow (state, show)
        {
            state.show 	= show
        },
        setMessageColor(state, color)
        {
            state.color = color
        },
        setMessageText(state, text)
        {
            state.text 	= text || 'Error'
        },
        setMessageSubText(state, subText)
        {
            state.subText = subText
        },
        setMessageTimeOut(state, timeout)
        {
            state.timeout = timeout
        },
    },
    actions:{
        message({ commit, state },color,text,subtext){

            commit('setMessageShow', true)
            commit('setMessageText', text)
            commit('setMessageSubText', subtext)
            commit('setMessageColor', color)

            setTimeout( () => 
            {
                commit('setMessageShow', false)
                commit('setMessageText', '')
                commit('setMessageSubText', '')
                commit('setMessageColor', 'error')
            }, state.timeout)
        },
        cleanMessage({ commit, state }){
            setTimeout( () => 
            {
                commit('setMessageShow', false)
                commit('setMessageText', '')
                commit('setMessageSubText', '')
                commit('setMessageColor', 'error')
            }, state.timeout)
        }
    }
}
