<script setup>
import TheIcon from "../components/TheIcon.vue";
import { useStore } from "vuex";
import { computed, onMounted, defineProps, defineEmits,ref } from "vue";
import { dateToRelative } from "@/utils/date";

const store = useStore();
const posts = computed(() => store.state.post.list);

onMounted(() => {
    store.dispatch("loadAllPosts");
})

const props = defineProps({
    post: {
        type: Object,
        default: () => ({}),
    },
    likes: Number,
    comments: Number,
    favors: Number,
    likedByMe: Boolean,
    favoredByMe: Boolean,
});


const likes = ref(0); 
const emit = defineEmits(["likeClick", "commentsClick", "favorClick"]);
const likedByMe = ref(false); 
const handleLikeClick = () => {
    const post = props.post;
    // console.log("Like clicked!"); 
    likedByMe.value = !likedByMe.value; 
    if (likedByMe.value) {
        likes.value++; // Increment likes if liked
    } else {
        likes.value--; // Decrement likes if unliked
    }

    store.dispatch('toggleLike', { id: post.id, isLike: likedByMe.value });
    emit("likeClick");
};
</script>

<template>
    <div class="postItem" v-for="post in posts" :post="post" :key="post.id">
        <div class="inner">
            <div class="imgBox">
                <img v-if="post.image" :src="post.image" /> 
                <!-- <img v-if="post.image" :src="post.image" />  -->
                <!-- <img v-else src="../assets/meat.jpg"> -->
            </div>
            <div class="meta">
                <div class="info">
                    <img src="../assets/avatarDefault.png" alt="" class="avatar">
                    <span>{{ post?.user?.name }}</span>
                </div>
                <div class="actions" :likes="post.liked_bies">
                    <TheIcon icon="like" @click="handleLikeClick" :fill="likedByMe ? 'red' : 'none'" stroke="#000" /><span>{{ likes || "" }}</span>
                    <TheIcon icon="comment" fill="none" stroke="#000" /><span>{{ comments||"" }}</span>
                    <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                </div>
            </div>
            <div class="des">
                <p>
                    {{ post.description }}
                    {{ post.image}}
                </p>
            </div>
            <span class="time">{{ dateToRelative(post.publishedAt) }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.postItem {
    display: flex;
    flex-direction: column;

    .imgBox {
        display: flex;
        width: 100%;
        margin-bottom: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0px 20px;
        }
    }

    .meta {
        display: flex;
        justify-content: space-between;

        .info {
            display: flex;
            align-items: center;
            gap: 5px;

            img {
                width: 24px;
                height: 24px;
            }
        }
    }

}


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

.des {
    text-align: start;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.time {
    display: flex;
    width: 100%;
    color: #333;
    font-size: 14px;
}
</style>