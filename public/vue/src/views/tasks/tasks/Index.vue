<template>
<v-container align-center>    

    <v-btn 
        slot="activator" 
        dark class="mb-2" 
        color="primary" 
        right 
        @click="showModal=!showModal">
        Add Task
       <v-icon dark right >add</v-icon>
    </v-btn>

    <tasks-list
    :listResource="resource"
    :addedItem="addedItem"
    :updatedItem="updatedItem"
    @listSelected="listSelected"
    >
    </tasks-list>

    <app-modal 
    :modal="showModal" 
    @closeModal="showModal=!showModal"
    >
        <tasks-form
        :formResource="resource"
        :formSelected="selectedItem"
        @updateList="updateList"
        @closeModal="showModal=!showModal"
        >
        </tasks-form>
    </app-modal>


</v-container>
</template>

<script>
import parentMixin from '~/mixins/parent'

import TasksForm from './TasksForm'
import TasksList from './TasksList'

import AppModal from '~/components/AppModal'

export default {
    mixins:[parentMixin],
    components: {
        'tasks-form':TasksForm,
        'tasks-list':TasksList,
        'app-modal':AppModal
    },
    data: () =>({
        resource: 'tasks/',
    }),
}
</script>
