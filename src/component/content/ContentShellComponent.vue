<template>
    <v-row
    style="height : 90%;"
    >
        <v-col
        style="height : 100%;"
        >
            <v-sheet
            width="100%"
            height="100%"

            >
                <keep-alive>
                    <template>
                        <component :is="componentInstance" />
                    </template>
                </keep-alive>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import eventBus from '../../utils/eventBus.js';

export default {
    data() {
        return {
            componentIdx : 0
        }
    },
    mounted() {
        eventBus.$on("getContentIndex", this.changeContentIdx);
    },
 