<script setup>
import TheModal from './TheModal.vue';
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const imageObjUrl = ref("");

const image = ref("");
const description = ref("");

async function handleImageUpload(e) {
    const imageFile = e.target.files[0];
    if (imageFile) {
        imageObjUrl.value = URL.createObjectURL(imageFile);
    }
}

function publishPost(){
    store.dispatch("uploadPost",{
        image: image.value,
        description: description.value,
    })
}

// async function publishPost() {
//     const response = await store.dispatch("uploadPost", {
//         image: image.value,  // 這裡確保是上傳後的圖片 URL
//         description: description.value,
//     });

//     // 更新本地圖片預覽為伺服器返回的圖片 URL
//     if (response?.imageUrl) {
//         imageObjUrl.value = response.imageUrl;
//     }
// }
</script>

<template>
    <TheModal @close="store.commit('changeShowPostUpload', false)">
        <div class="uploadBox">
            <label class="upload">
                <img v-if="imageObjUrl" :src="imageObjUrl" class="preview">
                <img v-else src="../assets/upload.png" alt="">
                <input type="file" accept="image/*" class="fileChooser" @change="handleImageUpload" />
            </label>
            <div class="content">
                <textarea placeholder="分享你喜歡的美食店家／攤位" class="contentInput" v-model="description"></textarea>
                <div class="sendBox" @click="publishPost">
                    <button class="sendBtn">發佈</button>
                </div>
            </div>
        </div>
    </TheModal>
</template>

<style lang="scss" scoped>
.uploadBox {
    display: flex;
    gap: 20px;
    height: 50vh;
}

.upload {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px dotted #000;
    position: relative;

    img {
        width: 50%;
    }

    span {
        font-size: 30px;
    }

    .preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.fileChooser {
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
}

.content {
    width: 50%;

    textarea {
        width: 100%;
        height: 85%;
    }
}

.sendBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .sendBtn {
        border: none;
        border-radius: 5px;
        background-color: transparent;
        color: #42b983;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
    }
}
</style>