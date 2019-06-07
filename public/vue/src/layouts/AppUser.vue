<template>
<div class="text-xs-center">
    <v-dialog
    v-model="showDialog"
    width="500"
    >
    <template v-slot:activator="{ on }">
        <v-btn icon >
            <v-icon v-on="on" >account_circle</v-icon>
        </v-btn>
    </template>

    <v-card>
        <v-card-title
        class="headline grey lighten-2"
        primary-title
        >
        {{user.username}}
        </v-card-title>

        <v-list two-line subheader>
            <v-subheader inset>{{user.username}}</v-subheader>
            <v-list-tile avatar>
                <v-list-tile-avatar>
                <v-icon :class="[iconClass]">mail</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title>E-mail</v-list-tile-title>
                <v-list-tile-sub-title>
                    <!-- {{ user.token }} -->
                </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
                </v-list-tile-action>
            </v-list-tile>
            <v-list-tile avatar>
                <v-list-tile-avatar>
                <v-icon :class="[iconClass]">phone</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title>Ext:</v-list-tile-title>
                <v-list-tile-sub-title>
                    <!-- {{ user.tx_telefono }} -->
                </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>

        <!-- <v-card-text>
        Lorem ipsum dolor
        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            flat
            @click="showDialog = false"
        >
            Close
        </v-btn>
        </v-card-actions>
    </v-card>
    <!-- <pre>{{user}}</pre> -->
    </v-dialog>
</div>
</template>

<script>
    export default {
        data () {
            return {
                showDialog: false,
                iconClass:'grey lighten-1 white--text'
            }
        },
        computed:{
            user(){
                return this.$store.getters.getUser
            }
        }
    }
</script>
