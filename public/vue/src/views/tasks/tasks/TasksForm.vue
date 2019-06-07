<template>
    <v-container>
        <v-layout align-center justify-center>
        <v-flex xs12>
            <v-form
            ref="form"
            v-model="formValid"
            lazy-validation
            >
                <v-flex>
                    <v-text-field
                    v-model="form.name"
                    :counter="10"
                    label="Name"
                    required
                    ></v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field
                    v-model="form.status"
                    :counter="10"
                    label="Status"
                    required
                    ></v-text-field>
                </v-flex>

                <v-btn
                :disabled="!formValid"
                color="success"
                @click="validate"
                >
                    <template
                    v-if="isAdding"
                    >
                    Submit
                    </template>
                    <template
                    v-else
                    >
                    Update
                    </template>
                </v-btn>

                <v-btn
                color="error"
                @click="formReset"
                >
                Cancel
                </v-btn>
            </v-form>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import formMixin from '~/mixins/form'
import fetchMixin from '~/mixins/fetch'
import rulesMixin from '~/mixins/rules'

export default {
    mixins:[fetchMixin,formMixin,rulesMixin],
    data: () =>({
    }),
    methods:{
        addTask: async function(){
            this.response = await this.request('POST',this.formResource,this.form)
            this.$emit('updateList',this.response)
            this.formReset()
        },
        editTask: async function(){
            let formResource = `${this.formResource}edit/${this.formSelected.id}/`
            this.response = await this.request('PUT',formResource,this.form)
            this.$emit('updateList',this.response)
            this.formReset()
        },

    }
}
</script>
