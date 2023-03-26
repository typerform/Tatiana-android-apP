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
                   