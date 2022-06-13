<template>
    <v-footer app>
        <v-col
            class="text-right text--secondary"
            cols="12"
        >
            <strong class="teal--text">DTwebsite</strong> © {{ new Date().getFullYear() }}
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        name: 'FooterComp',
    }
</script>
