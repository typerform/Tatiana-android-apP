<template>
    <v-list class="mt-4">
        <v-list-item-group mandatory>
            <v-list-item
            v-for="(item, i) in items"
            :key = "i"
            @click="vItemTouched(i)"
            >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
import { mdiPlaylistEdit, mdiCalendarRange } from '@mdi/js';
import eventBus from '../../utils/eventBus';

export default {
    data() {
        return {
            drawer: true,
            items: [
                {
                    title : "CHECK-LIST",
                    subtitle: "PLAN YOUR TODAY",
                    icon : mdiPlaylistEdit
                },
                {
                    title : "THE DATE RANGE",
                    subtitle: "WORKS DATE RANGE",
                    icon : mdiCalendarRange
                }
            ]
        }
    },

    methods: {
        vItemTouched: function (i) {
            eventBus.$emit("getContentIndex", i);
        }
    },
}
</script>

<style>

</style>