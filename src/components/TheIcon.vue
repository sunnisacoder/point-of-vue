<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`"></use>
    </svg>
</template>
<script setup>
//使用動態屬性，不能直接寫圖片路徑．需要使用 import 導入
/* eslint-disable */ 
import sprite from "@/assets/icons/sprite.svg";

defineProps({
    icon: String,
});
</script>