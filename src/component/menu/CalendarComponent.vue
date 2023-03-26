
<template>
    <v-sheet
    class="mt-12"
    height="40%"
    >
        <v-date-picker
        width="100%"
        height="100%"
        v-model="picker"
        >
        </v-date-picker>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            picker: new Date().toISOString().substr(0, 10)
        }
    },
    methods: {
        // For test
        // displayDate: function(date) {
        //     console.log(date);
        // }
    },
}
</script>

<style>

</style>