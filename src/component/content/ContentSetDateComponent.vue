<template>
    <v-container>
        <v-card
        class="my-3 py-1"
        v-for="(item, i) in items" 
        :key="i"
        >
            <v-row 
            align="cente