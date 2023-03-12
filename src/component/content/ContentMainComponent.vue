
<template>
    <v-container>
        <v-card
        class="my-3 py-1"
        v-for="(item, i) in items" 
        :key="i"
        >
            <v-row 
            align="center"
            >
                <v-col
                cols="1"
                >
                    <v-btn
                    block
                    :text="item.textState"
                    :color="item.color"
                    @click="checkBtnClicked(item)"
                    class="ml-2"
                    >
                        <v-icon
                        v-text="item.icon" 
                        :color="item.iconColor"
                        >
                        </v-icon>
                    </v-btn>
                </v-col>
                <v-col 
                cols="10"
                v-text="item.content"
                >
                </v-col>
                <v-col cols="1">
                    <v-btn
                    block
                    text
                    class="ml-n2"
                    @click="deleteBtnClicked(item.idx)"
                    >
                        <v-icon>
                        {{mdiDelete}}
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { mdiCheck, mdiCheckOutline, mdiDelete } from '@mdi/js';
import eventBus from '../../utils/eventBus.js';
import {getChkListStore, removeChkItem} from '../../utils/dataStore.js';

export default {
    data() {
        return {
            mdiCheck: mdiCheck,
            mdiCheckOutline: mdiCheckOutline,
            mdiDelete: mdiDelete,
            items: []
        }
    },
    mounted() {
        this.changeItems(getChkListStore());
        eventBus.$on("chkItemAdded", this.changeItems);
    },
    methods: {
        checkBtnClicked: function(item){
            if(!item.isChecked){
                item.color = 'grey darken-1';
            }else{
                item.color = 'white';
            }
            item.isChecked = !item.isChecked;
            item.textState = !item.textState;
        },
        deleteBtnClicked: function(idx){
            this.items = removeChkItem(idx);
            eventBus.$emit("setSnackBar", { text: 'Check List Item Removed Successfully!', component: 'main', idx: idx });
        },
        changeItems: function(list) {
            this.items = list;
        }
        // addItem: function(item){
        //     this.items.push({
        //         isChecked: false,
        //         textState: true,
        //         color: 'white',
        //         icon: this.mdiCheck,
        //         iconColor: 'white',
        //         content: item.content,
        //         idx: this.items.length+1           
        //     });
        // }
    },
}
</script>

<style>

</style>