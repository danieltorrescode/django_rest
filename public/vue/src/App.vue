<template>
<v-app>
    <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
        <span>VUE</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
        <div id="nav">
            <router-link to="/signup">Sing Up</router-link> |
            <router-link to="/login">Log In</router-link> |        
            <a href="" v-on:click="logout" >Log out</a> |        
            <router-link to="/about">About</router-link>|
            <router-link to="/tasks">Tasks</router-link>
        </div>        
    </v-toolbar>

    <v-content>
    <router-view/>
    </v-content>

    <app-message></app-message>

    <app-user></app-user>

</v-app>
</template>

<script>
    import AppMessage from '~/components/AppMessage.vue'
    import AppUser from '~/layouts/AppUser.vue'

    export default {
        name: 'App',
        components:{
            'app-message': AppMessage, 
            'app-user': AppUser 
        },
        created(){
            this.$store.commit('setUser')
            document.title = this.$App.title
        },
        data: () => ({            
        }),
        methods:{
            logout (){
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                this.$router.push("/")
            }
        }
    }
</script>
