<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
    store.dispatch("loadAllPosts");
})
</script>

<template>
    <div class="postList">
        <div class="postBox">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.postList {
    .postBox {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 20px;
        row-gap: 50px;
    }
}
</style>