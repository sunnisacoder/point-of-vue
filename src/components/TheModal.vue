<template>
    <teleport to="body">
        <div class="modal">
            <!-- 遮罩 -->
            <div class="overlay" @click="$emit('close')"></div>
            <div class="modalContent">
                <div class="closeBtn" @click="$emit('close')">
                    <TheIcon icon="close" />
                </div>
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script setup>
 /* eslint-disable */ 
import TheIcon from "../components/TheIcon.vue";

defineEmits(["close"]);

// 點擊 overlay、closeBtn 時，alert 詢問是否真的要離開發文視窗
// 
// 
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    left: 0;
    top: 0;
    display: grid;
    place-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.modalContent {
    position: relative;
    width: 70%;
    max-height: 90vh;
    background: white;
    padding: 20px;
    border-radius: 10px;
}

.closeBtn {
    position: absolute;
    background: none;
    border: none;
    right: 0;
    top: -40px;
    background-color: #fff;
    border-radius: 20%;
    padding: -5px 0px;
    cursor: pointer;

    svg {
        width: 54px;
        height: 54px;
        scale: 0.5;
    }
}
</style>