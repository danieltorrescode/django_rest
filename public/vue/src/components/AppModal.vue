<template>
    
    <v-dialog
        fullscreen
        transition="slide-x-reverse-transition"
        v-model="modal"        
        persistent :overlay="false"
        max-width="500px"
        
    >
        <v-card>
            <v-toolbar :color="$App.theme.headModal">
                <h3>{{titulo}}</h3>
                <v-spacer></v-spacer>
                <v-btn 
                color="red" 
                fab small dark 
                @click="$emit('closeModal')"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text>
            <slot></slot>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'app-modal',
    props:['modal', 'titulo']
}

</script>
<style scope>
</style>
