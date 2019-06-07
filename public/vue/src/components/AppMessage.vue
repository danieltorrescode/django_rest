<template>
    <v-snackbar
    :timeout="timeoutMessage"
    :color="colorMessage"
    :value="showMessage"
    :multi-line="false"
    >
        {{ txtMessage }}
        {{ subTxtMessage }}
        <v-btn dark flat @click.native="close">
            <v-icon>close</v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script>

    export default {
        computed:{

            showMessage(){
                return this.$store.getters['messageShow']
            },
            txtMessage(){
                return this.$store.getters['messageText']
            },
            subTxtMessage(){
                return this.$store.getters['messageSubtext']
            },
            colorMessage(){
                return this.$store.getters['messageColor']
            },
            timeoutMessage(){
                return this.$store.getters['messageTimeout']
            }
        },
        methods: {
            close() {
                this.$store.commit('setMessageShow', false)
            }
        }
    }
</script>
