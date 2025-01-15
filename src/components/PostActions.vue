<script setup>
import TheIcon from "../components/TheIcon.vue";
import { useStore } from "vuex";
import { onMounted, defineProps, defineEmits } from "vue";

const store = useStore();

onMounted(() => {
    store.dispatch("loadAllPosts");
})

defineProps({
    likes: Number,
    comments: Number,
    favors: Number,
    likedByMe: Boolean,
    favoredByMe: Boolean,
});

const emit = defineEmits(["likeClick", "commentsClick", "favorClick"]);

</script>

<template>
    <div class="actions">
        <TheIcon icon="like" @click="emit('likeClick')" :fill="likedByMe ? 'red' : 'none'"
            :stroke="likedByMe ? 'red' : 'black'" /><span>{{ likes || "" }}</span>
        <TheIcon icon="comment" @click="emit('commentsClick')" fill="none" stroke="#000" /><span>{{ comments || ""
            }}</span>
        <TheIcon icon="favorite" @click="emit('favorClick')" :fill="favoredByMe ? 'yellow' : 'none'"
            :stroke="favoredByMe ? 'yellow' : 'black'" /><span>{{ favors || "" }}</span>
    </div>
</template>

<style lang="scss" scoped>
.actions {
    gap: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 16px;
    row-gap: 4px;
    padding: 0 10px;

    svg {
        width: 32px;
        height: 32px;
        grid-row: 1 / 2;
        cursor: pointer;
    }

    span {
        font-size: 14px;
    }
}
</style>