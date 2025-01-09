<script setup>
import TheModal from './TheModal.vue';
</script>

<template>
    <TheModal>
        <div class="uploadBox">
            <label for="" class="upload">
                <img src="../assets/upload.png" alt="">
                <input type="file" accept="image/*" class="fileChooser" />
            </label>
            <div class="content">
                <textarea placeholder="分享你喜歡的美食店家／攤位" class="contentInput"></textarea>
                <div class="sendBox">
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
}

.upload {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 50%;
    }
}

.fileChooser {
    padding: 20px;
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