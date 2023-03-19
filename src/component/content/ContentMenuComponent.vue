<template>
    <v-row>
        <v-col>
            <div>
                <v-btn
                large
                @click="createBtnClicked()"
                >
                Add
                </v-btn>
                <app-item-dialog
                :value="isOverlaied" 
                @overlayClosed="changeOverlayState"
                >
                </app-item-dialog>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import ItemDialog from '../fixed/ItemDialog.vue';
export default {
    components: {
        'app-item-dialog': ItemDialog
    },
    data() {
        return {
            isOverlaied: false
        }
    },
    methods: {
        createBtnClicked(){
            this.isOverlaied = true;
        },
        changeOverlayState(){
            this.isOverlaied = false;
        }
    },

}
</script>

<style>

</style>