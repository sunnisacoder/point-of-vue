<template>
    <img :src="src || defaultAvatar" class="avatar">
</template>

<script setup>
import defaultAvatar from "../assets/profile.png"
import { defineProps } from "vue";

defineProps({
    src: String,
    width:{
        type: Number,
        default: 34,
    },
    height:{
        type: Number,
        default: 34,
    },
});
</script>

<style lang="scss">
.avatar{
    width: v-bind(width+"px");
    height: v-bind(height+"px");
    border-radius: 50%;
    object-fit: cover;
}
</style>