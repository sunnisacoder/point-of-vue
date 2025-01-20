<script setup>
import TheAvatar from '@/components/TheAvatar.vue';
import { useStore } from "vuex";
import { computed, reactive } from "vue"
import { uploadFile } from '@/apis/file';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const user = computed(()=>store.state.user.user);
const profileData = reactive({
    avatar: user.value.avatar,
    username: user.value.username,
    intro: user.value.intro,
    website: user.value.website,
});

async function uploadAvatar(e){
    const file = e.target.files[0];
    const url = await uploadFile(file);
    profileData.avatar = url;
}

async function updateUser(){
    await store.dispatch("updateUser", profileData);
    router.push("/profile");
}
</script>

<template>
    <div class="profileEditBox">
        <p>編輯個人檔案</p>
        <div class="changeAvatar">
            <div class="inner">
                <TheAvatar style="width: 84px;height:84px;" :src="profileData.avatar" />
                <button>
                    變更相片
                    <input type="file" class="fileChooser" @change="uploadAvatar"/>
                </button>
            </div>
        </div>
        <!-- @submit.prevent="updateUser" -->
        <form class="profileForm" @submit.prevent="updateUser">
            <div class="inner">
                <label for="username">名稱</label>
                <input type="text" v-model="profileData.username"/>
                <label for="intro">個人簡介</label>
                <input type="text" v-model="profileData.intro"/>
                <label for="website">連結</label>
                <input type="text" v-model="profileData.website"/>
            </div>
            <div class="actions">
                <button type="reset" reverse @click.prevent="router.push('/profile')">回上頁</button>
                <button type="submit">完成</button>
            </div>
        </form>
    </div>

</template>


<style lang="scss" scoped>
.profileEditBox{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 767px;
    margin: 30px auto;
    border-radius: 30px;

    p{
        font-size: 24px;
        font-weight: 800;
    }

    button{
        background-color: #333;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        padding: 10px 20px;
    }
}


.changeAvatar {
    width: 100%;
    background-color: #ccc;
    border-radius: 20px;
    margin-bottom: 20px;

    .inner{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
    }

    button{
        padding: 10px 20px;
        position: relative;
    }

    .fileChooser {
        cursor: pointer;
        width: 100%;
        height: 100%;
        opacity: 1;
        position: absolute;
    }
}

.profileForm{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .inner{
        width: 100%;
    }

    label{
        display: flex;
    }

    input{
        width: 100%;
        padding-block: 10px;
        padding-inline: 0px;
        margin-bottom: 20px;
    };
}
.actions{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
}
</style>