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
                                <v-divider></v-divider>
                                <v-btn
                                    block
                                    class="mt-4"
                                    color="rgb(65, 184, 131)"
                                    @click="sumbit"
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
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
    components: { FooterComp },
    mixins: [validationMixin],
    validations: {
        email: { required, email },
        password: { required },
        captcha: { required },
    },
}
</script>