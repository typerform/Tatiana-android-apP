
<template>
    <div id="app">
        <v-app>
            <header>
                <app-header></app-header>
            </header>
            <aside>
                <app-menu></app-menu>
            </aside>
            <app-content></app-content>
            <footer>
                <app-footer></app-footer>
            </footer>
            <app-snack-bar></app-snack-bar>
        </v-app>
    </div>
</template>

<script>
import HeaderComponent from './component/HeaderComponent.vue';
import MenuComponent from './component/menu/MenuComponent.vue';
import ContentDomainComponent from './component/content/ContentDomainComponent.vue';
import FooterComponent from './component/FooterComponent.vue';
import SnackBarComponent from './component/fixed/SnackBarComponent.vue';


export default {
    components : {
        'app-header': HeaderComponent,
        'app-menu': MenuComponent,
        'app-content': ContentDomainComponent,
        'app-footer': FooterComponent,
        'app-snack-bar': SnackBarComponent
    },
    created() {
        this.$vuetify.theme.dark = true
    }
}
</script>

<style>

</style>