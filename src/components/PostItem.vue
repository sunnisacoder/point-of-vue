<script setup>
import PostActions from "./PostActions.vue";
import { useStore } from "vuex";
import { computed, onMounted, defineProps } from "vue";
import { dateToRelative } from "@/utils/date";
import TheAvatar from "./TheAvatar.vue";

const store = useStore();
const posts = computed(() => store.state.post.list);
// console.log(posts)

onMounted(() => {
    store.dispatch("loadAllPosts");

    // 從 localStorage 拿34 35 36
    const userLikesLocal = localStorage.getItem("user");
    if (userLikesLocal) {
        currentUser.likePost = userLikesLocal;
    }
    console.log('已拿到',userLikesLocal)
})

// 顯示用戶已點讚的貼文
const currentUser = { 
    likePost: [] 
};
function userLikes(postId) {
    return currentUser.likePost.includes(postId);
}


defineProps({
    post: {
        type: Object,
        default: () => ({}),
    },
});
</script>

<template>
    <div class="postItem" v-for="post in posts" :post="post" :key="post.id">
        <div class="inner">
            <div class="imgBox">
                <img v-if="post.image" :src="post.image" @click="$store.dispatch('showPostDetails', post.id)" />
            </div>
            <div class="meta">
                <!-- 顯示用戶已點讚的貼文 -->
                <span v-if="userLikes(post.id)">Like</span>
                <span v-else>XXX</span>
                <div class="info">
                    <TheAvatar />
                    <span>傘蜥蜴</span> <!-- {{ post?.user?.name }} -->
                </div>
                <!-- :userLikes="" user 喜歡的 文章id -->
                <PostActions 
                    :likes="post.liked_bies" 
                    :likedByMe="post.likedByMe"
                    @likeClick="$store.dispatch('toggleLike', post.id)" 
                    :favors="post.favored_bies"
                    :favoredByMe="post.favoredByMe" 
                    @favorClick="$store.dispatch('toggleFavor', post.id)"
                    :comments="post.comments" 
                    @commentsClick="$store.dispatch('showPostDetails', post.id)"
                />
            </div>
            <div class="des">
                <p>
                    {{ post.description }}
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
            font-weight: 800;

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