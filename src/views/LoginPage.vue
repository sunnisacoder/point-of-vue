<template>
    <div class="loginPage">
        <div class="loginForm">
            <form @submit.prevent>
                <input type="email" placeholder="電子信箱" v-model="email" required />
                <input v-if="!isLogin" type="text" placeholder="用戶名稱" v-model="username" required />
                <input type="password" placeholder="密碼" v-model="password" required minlength="8" />
                <button type="submit" class="loginBtn" @click="isLogin ? login() : register()">
                    {{ isLogin ? "登入" : "註冊" }}
                </button>
                <p @click="isLogin = !isLogin" class="info">
                    {{
                        isLogin ? "沒有帳號嗎？趕快來註冊！" : "已有帳號？點擊登入！"
                    }}
                </p>
                <div v-if="!isLogin" class="agreement">
                    <input type="checkbox" v-model="agreementChecked" />勾選表示同意作為此練習專案的人質
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const isLogin = ref(true);

const email = ref("");
const username = ref("");
const password = ref("");
const agreementChecked = ref(false);

const store = useStore();
const router = useRouter();

function isEmailValid(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
}

async function register() {
    if (!isEmailValid(email.value)) {
        alert("請輸入正確的信箱格式");
        return;
    }

    if (!agreementChecked.value) {
        alert("同意作為此練習專案的人質");
        return;
    }

    await store.dispatch("registerUser", {
        email: email.value,
        username: username.value,
        password: password.value,
    });
    router.replace("/");
}

async function login() {
    if (!isEmailValid(email.value)) {
        alert("請輸入正確的信箱格式");
        return;
    }

    await store.dispatch("loginUser", {
        email: email.value,
        password: password.value,
    });

    router.replace("/");
}
</script>

<style lang="scss" scoped>
.loginPage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    // // opacity: 0.5;
    // background-position: center;
    // background-image: url('../assets/market_banner.png');
}

.loginForm {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.06);
    border-radius: 32px;
    background-color: #fff;
    padding: 75px 30px;
    row-gap: 50px;
    width: 300px;
    position: relative;

    // &::after {
    //     content: '';
    //     z-index: -1;
    //     opacity: .8;
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    // }

    form {
        display: grid;
        row-gap: 24px;
        width: 100%;
        height: 100%;
    }
}

input {
    height: 100%;
    border-radius: 4px;
    border: none;
    background-color: rgba(0, 0, 0, 0.06);
    font-size: 15px;
    font-weight: 500;
    padding: 5px;
    margin: 0;

    &::placeholder {
        color: #9e9e9e;
        font-size: 15px;
        font-weight: 500;
    }
}

.loginBtn {
    background-color: transparent;
    border: 1px solid #42b983;
    color: #42b983;
    border-radius: 15px;
    display: block;
    margin: 15px auto;
    padding: 15px 45px;
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        border: none;
        transition: background-color .3s;
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.info {
    color: #42b983;
    text-align: center;
    cursor: pointer;
}

.agreement {
    color: #333;
    display: flex;
    align-items: center;

    input {
        margin-right: 5px;
    }
}
</style>