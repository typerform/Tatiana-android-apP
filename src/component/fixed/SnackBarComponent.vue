<template>
    <v-snackbar
    v-model="show"
    bottom
    :timeout="timeout"
    color="blue-grey lighten-5"
    class="black--text text--black"
    >
        {{text}}
        <v-btn text color="accent" @click.native="show = false">
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import eventBus from '../../utils/eventBus.js';

export default {
    data() {
        return {
            text: '',
            show: false,
            timeout: 2000
        }
    },
    mounted() {
        eventBus.$on("setSnackBar", this.changeSnack);
    },
    methods: {
        changeSnack: function(options){
            this.text = options.text;
            this.show = true;
        }
    }
}
</script>

<style>

</style>