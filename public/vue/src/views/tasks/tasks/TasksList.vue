<template>
<v-container align-center>    
    <v-layout row wrap  align-center justify-center>
    <v-flex xs12>

        <v-flex xs12 xs6>
            <v-text-field
                v-model="listSearch"
                label="Search"
                single-line
                hide-details
                clearable
            ></v-text-field>
        </v-flex>

        <v-data-table
            :headers="dataTableHeaders"
            :items  ="listItems"
            :search ="listSearch"
            item-key="id"
            rows-per-page-text="Res. x Pag"
            disable-initial-sort
            :loading="listLoading">

            <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.name }}</td> 
                <td class="text-xs-left">{{ props.item.status }}</td>
                <td class="justify-center">
                    <v-icon @click="selectItem(props.item,'upd')" >
                    edit
                    </v-icon>
                    <v-icon @click="selectItem(props.item,'del')">
                    delete
                    </v-icon>
                </td>
            </template>

            <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning">
                "{{ listSearch }}" not founded.
            </v-alert>

        </v-data-table>

    </v-flex>
    </v-layout>

    <v-dialog
        v-model="listDialog"
        scrollable  
        persistent 
        max-width="500px"
        transition="dialog-transition">

        <v-card>
            <v-card-title color="error" primary-title>
                <h3>Alert</h3>
            </v-card-title>
            <v-card-text>
                <v-icon>alert</v-icon> want you delete "{{ listSelected.name }}"
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="deleteTask()">confirm</v-btn>
                <v-btn color="error" @click="listDialog= !listDialog">cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</v-container>
</template>

<script>
import listMixin from '~/mixins/list'
import fetchMixin from '~/mixins/fetch'

export default {
    mixins:[listMixin,fetchMixin],
    data: () =>({
        dataTableHeaders: [
            { text: 'Name', value: 'name' },
            { text: 'Status ', value: 'status' },
            { text: 'Actions', value: null}  
        ],
    }),
    created(){
        this.getTasks()
    },
    methods:{
        getTasks: async function() {
            this.listLoading = true
            this.response = await this.request('GET',this.listResource,{})
            this.listItems = this.response
            this.listLoading = false
        },
        deleteTask: async function(){
            this.listDialog = false
            let resource = `${this.listResource}edit/${this.listSelected.id}/`
            this.response = await this.request('DELETE',resource,{})
            this.removeFromItems(this.listSelected.id)
            this.listSelected = {}
        },
    }
}
</script>
