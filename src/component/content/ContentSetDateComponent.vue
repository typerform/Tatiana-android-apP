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
  