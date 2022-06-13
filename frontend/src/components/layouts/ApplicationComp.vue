<template>
    <!-- App.vue -->
    <v-app>
        <v-navigation-drawer
            app
            v-model="drawer"
            style="max-height: none;"
        >
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list align="left">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-group
                    v-for="(item, index) in items"
                    :key="'group-'+index"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(child, index) in item.items"
                        :key="'list-'+index"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-row
                align="center"
                justify="end"
            >
                <div class="text-center">
                    <v-menu
                        offset-y
                        left
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                text
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon left>mdi-account</v-icon>後台管理員
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                link
                                color="primary"
                                @click="logout"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-logout</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>登出</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-row>
        </v-app-bar>

        <!-- 根据应用组件来调整你的内容 -->
        <v-main>
            <!-- 给应用提供合适的间距 -->
            <v-container fluid>
                <!-- 如果使用 vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <footer-comp></footer-comp>
    </v-app>
</template>

<script>
    import FooterComp from '@/components/layouts/FooterComp'

    export default {
        name: 'ApplicationComp',
        components: { FooterComp },
        data: () => ({
            drawer: true,
            items: [
                {
                    action: 'mdi-ticket',
                    items: [{ title: 'List Item' }],
                    title: 'Attractions',
                },
                {
                    action: 'mdi-silverware-fork-knife',
                    active: true,
                    items: [
                        { title: 'Breakfast & brunch' },
                        { title: 'New American' },
                        { title: 'Sushi' },
                    ],
                    title: 'Dining',
                },
                {
                    action: 'mdi-school',
                    items: [{ title: 'List Item' }],
                    title: 'Education',
                },
                {
                    action: 'mdi-human-male-female-child',
                    items: [{ title: 'List Item' }],
                    title: 'Family',
                },
                {
                    action: 'mdi-bottle-tonic-plus',
                    items: [{ title: 'List Item' }],
                    title: 'Health',
                },
                {
                    action: 'mdi-briefcase',
                    items: [{ title: 'List Item' }],
                    title: 'Office',
                },
                {
                    action: 'mdi-tag',
                    items: [{ title: 'List Item' }],
                    title: 'Promotions',
                },
                {
                    action: 'mdi-tag',
                    items: [{ title: 'List Item' }],
                    title: 'Promotions',
                },
                {
                    action: 'mdi-tag',
                    items: [{ title: 'List Item' }],
                    title: 'Promotions',
                },
                {
                    action: 'mdi-tag',
                    items: [{ title: 'List Item' }],
                    title: 'Promotions',
                },
                {
                    action: 'mdi-tag',
                    items: [{ title: 'List Item' }],
                    title: 'Promotions',
                },
            ],
        }),
        methods: {
            logout() {
                console.log(1);
            }
        }
    }
</script>