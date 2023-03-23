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
                <!-- DATE -->
                <v-col 
                cols="2"
                class="text-center ml-2"
                >
                {{ item.startDate }}
                </v-col>
                <v-col 
                cols="2"
                class="text-center"
                >
                {{ item.endDate }}
                </v-col>
                <!-- TEXT -->
                <v-col 
                cols="7"
                >
                {{ item.content }}
                </v-col>
                <!-- DELETE-->
                <v-col 
                cols="1"
                class="ml-n4"
                >
                    <v-btn
                    block
                    text
                    @click="deleteBtnClicked(item.idx)"
                    >
                        <v-icon>
                        {{ mdiDelete }}
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import eventBus from '../../utils/eventBus.js';
import { mdiDelete } from '@mdi/js';
import { getDateListStore, removeDateItem } from '../../utils/dataStore.js';

export default {
    data(){
        return {
            mdiDelete: mdiDelete,
            items: []
        }
    },
    mounted() {
        this.changeItems(getDateListStore());
        eventBus.$on("dateItemAdded", this.changeItems);
    },
    methods: {
        deleteBtnClicked: function(idx){
            this.items = removeDateItem(idx);
            eventBus.$emit("setSnackBar", { text: 'Date Range Item Removed Successfully!', component: 'date', idx: idx })
        },
        changeItems: function(list){
            this.items = list;
        }
    },
}
</script>

<style>
</style>