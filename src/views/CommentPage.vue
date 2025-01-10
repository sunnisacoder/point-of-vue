<template>
    <h1>我是美食家 <br>Comment Page</h1>
    <div class="wrap">
        <div class="searchInput">
            <input type="text" placeholder="Search" @change="searchPosts" />
            <TheIcon icon="search" />
        </div>
        <div class="postList">
            <div class="postBox">
                <div class="postItem" v-for="post in posts" :post="post" :key="post.id">
                    <div class="inner">
                        <div class="imgBox">
                            <img :src="post.image"/>
                        </div>
                        <div class="meta">
                            <div class="info">
                                <img src="../assets/avatarDefault.png" alt="" class="avatar">
                                <span>{{ post?.user?.name }}</span>
                            </div>
                            <div class="actions">
                                <TheIcon icon="like" fill="none" stroke="#000" /><span>87</span>
                                <TheIcon icon="comment" fill="none" stroke="#000" /><span>6</span>
                                <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                            </div>
                        </div>
                        <div class="des">
                            <p>
                                {{ post.description }}
                            </p>
                        </div>
                        <span class="time">{{ dateToRelative(post.publishedAt) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <CommentPageDetail/> -->
    <PostUpload v-if="showPostUpload" />
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import { useStore } from "vuex";
import { computed, onMounted,defineProps } from "vue";
// import CommentPageDetail from "../components/CommentPageDetail.vue";
import PostUpload from "../components/PostUpload.vue";
import { dateToRelative } from "@/util/date";

const store = useStore();
const showPostUpload = computed(() => store.state.showPostUpload);
const posts = computed(() => store.state.post.list);

onMounted(() => {
    store.dispatch("loadAllPosts");
})

defineProps({
    post: {
        type: Object,
        default: () => ({}),
    },
});
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    max-width: 1365px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 50px;
}

.searchInput {
    position: relative;
    height: 40px;
    display: flex;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;

    input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 500;
        padding: 0 20px 0 40px;

        &::placeholder {
            font-size: 15px;
            font-weight: 500;
        }
    }

    svg {
        position: absolute;
        top: 11px;
        left: 10px;
        pointer-events: none;
    }
}

.postList {
    .postBox {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 20px;
        row-gap: 50px;
    }

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