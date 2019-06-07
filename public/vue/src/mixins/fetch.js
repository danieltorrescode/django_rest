export default {
    data() 
    {
        return{
            url:this.$App.baseUrl,
            fetchHeaders:{
                'Authorization': `jwt ${localStorage.getItem("token")}`
            },
            fecthContent:{},
            response: null
        }
    },
    methods:{

        request(method,resource,data) {
            let url = `${this.url}${resource}`
            
            let body = {}

            if ( JSON.stringify(data) != '{}' ){
                body ={
                    body: JSON.stringify(data)                 
                }
            }

            let content = {
                method: method,
                headers:{
                    'Content-Type': 'application/json',
                    ...this.fetchHeaders
                },
                ...body,
                ...this.fecthContent
            }
            
            return fetch(url,content).then(
                res => this.checkResponse(res)
            )
            .then(resp => resp)
            .catch(error => {
                console.error('Error:', error)
            
                this.$store.commit('setMessageShow', true)
                this.$store.commit('setMessageText', error)
                this.$store.dispatch('cleanMessage')
            });

        },
        checkResponse(resp){
            if(resp.status == "401"){
                this.logout(resp.statusText)
            }
            return resp.json()
        },
        authenticate(){
            if('token' in this.response){
                let token = this.response.token
                let user = this.response

                localStorage.setItem("token",token)
                localStorage.setItem("user",JSON.stringify(user))


                this.$store.commit('setUser')
                this.$router.push("/")
            }else{

                this.$store.commit('setMessageShow', true)
                this.$store.commit('setMessageText', 'Invalid data')
                this.$store.dispatch('cleanMessage')
            }
        },
        logout(message){
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            this.$router.push("/")
            this.showMessage(message)
        },
        showMessage(message){
            this.$store.commit('setMessageShow', true)
            this.$store.commit('setMessageText', message)
            this.$store.dispatch('cleanMessage')
        }

    } 
}
