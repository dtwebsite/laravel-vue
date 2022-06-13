<template>
    <v-app>
        <!-- 根据应用组件来调整你的内容 -->
        <v-main class="pa-0" style="background-color: #E7E7E7;">
            <v-row
                no-gutters
                style="height: 100vh;"
                class="align-center"
            >
                <img
                    src="@/assets/LoginBackgroundImg.png"
                    style="width:60%; position: absolute; transform: translate(5%, 5%); z-index: 4;"
                    class="d-none d-sm-flex"
                >
                <v-col
                    cols="12"
                    md="3"
                    offset-md="8"
                    sm="5"
                    offset-sm="7"
                    class="pa-3"
                >
                    <v-card
                        elevation="24"
                        style="min-height: 350px; z-index: 5;"
                        height="50%"
                        class="pa-10 rounded-lg mx-auto"
                        color="#F5F5F5"
                    >
                        <v-card-title class="justify-center">管理員登入</v-card-title>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="信箱"
                                    required
                                    rounded
                                    dense
                                    outlined
                                ></v-text-field>

                                <v-text-field
                                    v-model="password"
                                    :rules="passwordRules"
                                    label="密碼"
                                    type="password"
                                    required
                                    rounded
                                    dense
                                    outlined
                                ></v-text-field>

                                <v-text-field
                                    v-model="captcha"
                                    :rules="captchaRules"
                                    label="驗證碼"
                                    required
                                    rounded
                                    dense
                                    outlined
                                ></v-text-field>
                                <v-row>
                                    <v-col cols="12">
                                        <v-img height="55px" :src="captchaImg" @click="captchaGet" style="cursor:pointer;"></v-img>
                                    </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-btn
                                    block
                                    class="mt-4"
                                    color="#3eaf7c"
                                    @click="submit"
                                >
                                    登入
                                </v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- 如果使用 vue-router -->
            <router-view></router-view>
        </v-main>
        <footer-comp
            style="width: 50%;left: unset;background-color: #E7E7E7;"
        ></footer-comp>
    </v-app>
</template>

<script>
import FooterComp from '@/components/layouts/FooterComp.vue'

export default {
    components: { FooterComp },
    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            v => !!v || '請填寫信箱',
            v => /.+@.+\..+/.test(v) || '請符合信箱格式',
        ],
        password: '',
        passwordRules: [
            v => !!v || '請填寫密碼',
        ],
        captcha: '',
        captchaRules: [
            v => !!v || '請填寫驗證碼',
        ],
        captchaImg: '',
    }),
    created() {
        // this.captchaGet();
    },
    methods: {
        captchaGet() {
            console.log(1);
    //         captcha().then(response => {
    //             this.captchaImg = response.img;
    //         }).catch(error => {
    //             console.error(error);
    //         })
        },
        submit() {
            console.log(2);
            // if (this.$refs.form.validate()) {

            // }
        }
    }
}
</script>