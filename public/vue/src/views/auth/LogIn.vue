<template>
  <v-form 
    ref="form"
    v-model="formValid"
    lazy-validation
  >
    <v-container>
        <v-layout row wrap  align-center justify-center>
            <v-flex xs12 md4>
                <v-text-field
                v-model="username"
                :rules="rules.user"
                :counter="10"
                label="Username"
                required
                ></v-text-field>
            </v-flex>

            <v-flex  xs12 md4>
                <v-text-field
                v-model="password"
                :counter="10"
                label="Password"
                type="password"
                required
                ></v-text-field>
            </v-flex>

            <v-btn
            :disabled="!formValid"
            color="success"
            @click="validate"
            >
            Submit
            </v-btn>

            <v-btn
            color="error"
            @click="formReset"
            >
            Cancel
            </v-btn>
        </v-layout>
    </v-container>
  </v-form>
</template>

<script>
    import formMixin from '~/mixins/form'
    import fetchMixin from '~/mixins/fetch'
    import rulesMixin from '~/mixins/rules'

    export default {
        mixins:[formMixin,fetchMixin,rulesMixin],
        props:{
            formResource:{
                default: 'users/login/'
            },
        },
        data: () => ({
            username: '',
            password:''
        }),
        methods: {
            afterValidate: function(){
                this.login()
            },
            login: async function () {
                let data = {
                    username: this.username.trim(),
                    password: this.password.trim(),
                }

                // function params
                // request(method,resource,data)
                // fetchHeaders most be overwrite to not send jwt
                this.fetchHeaders = {}
                this.response = await this.request('POST',this.formResource,data)
                this.authenticate()
            }
        }
    }
</script>
