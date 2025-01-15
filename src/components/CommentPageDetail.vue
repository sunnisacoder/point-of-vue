<template>
    <TheModal @close="$store.dispatch('hidePostDetails')">
        <div class="detailBox">
            <div class="imgBox">
                <picture>
                    <img :src="post.image" />
                </picture>
            </div>
            <div class="rightBox">
                <div class="meta">
                    <div class="info">
                        <TheAvatar/>
                        <span>傘蜥蜴</span> <!--{{ post.user?.name }} -->
                    </div>
                    <div class="des">
                        <p>
                            {{ post.description }}
                        </p>
                    </div>
                    <span class="time">{{ dateToRelative(post.publishedAt) }}</span>
                </div>
                <div class="commentBox">
                    <div class="commentItem" v-for="comment in comments" :key="comment.id">
                        <div class="user">
                            <TheAvatar/>
                        </div>
                        <div class="inner">
                            <div class="topBox">
                                <p class="content">
                                    <span class="userName">撒尼</span> <!-- {{ comment.user?.name }} -->
                                    {{ comment.content }}
                                </p>
                            </div>
                            <div class="downBox">
                                <span class="time">
                                    {{ dateToRelative(comment.pubDate) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actionBox">
                    <PostActions
                        :likes="post.liked_bies" 
                        :likedByMe="post.likedByMe" 
                        @likeClick="$store.dispatch('toggleLike', post.id)"
                        :favors="post.favored_bies" 
                        :favoredByMe="post.favoredByMe" 
                        @favorClick="$store.dispatch('toggleFavor', post.id)"
                        :comments="post.comments"
                    />
                    <div class="sendBox">
                        <input type="text" name="comment" v-model="content" id="" class="commentInput" placeholder="你覺得好吃嗎？">
                        <button @click="store.dispatch('addComment', {content, postId:post.id})" class="sendBtn">發佈</button>
                    </div>
                </div>
            </div>
        </div>
    </TheModal>
</template>

<script setup>
import TheAvatar from "./TheAvatar.vue";
import PostActions from "./PostActions.vue";
import TheModal from "../components/TheModal.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { dateToRelative } from "@/utils/date";

const content= ref("");

const store = useStore();
const post = computed(() => store.getters.postDetails);
const comments = computed(() => store.state.comment.list);
</script>

<style lang="scss" scoped>
.detailBox {
    display: flex;
    gap: 10px;

    .imgBox {
        display: flex;
        width: 50%;
        position: relative;
        border: 1px solid red;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
        }

        picture {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            // height: 100%;
            object-fit: cover;
            border-radius: 0px 20px;
            left: 0;
            top: 0;
            position: absolute;
        }
    }

    .time {
        margin-left: 30px;
        color: #333;
        font-size: 14px;
        margin-top: -12px;
    }


    .rightBox {
        width: 50%;

    }

    .des {
        margin-left: 30px;
        margin-right: 30px;

        p {
            margin-block-start: 5px;
            margin-block-end: 0;
        }
    }

    .info {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 800;
    }


}

.actionBox {
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #fff;

    &::before {
        content: "";
        display: flex;
        margin: 0 auto;
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-bottom: 10px;
        opacity: 0.2;
    }
}

.commentBox {
    overflow-y: auto;
    height: 500px;
    margin-right: 30px;

    .user {
        display: flex;
        margin-right: 5px;
    }

    .topBox {
        display: flex;

        .userName {
            flex-shrink: 0;
            margin-right: 8px;
            align-items: self-start;
            font-weight: 800;
        }

        .content {
            margin-block: 0;
        }
    }

    .inner {
        display: flex;
        flex-direction: column;
    }

    .time {
        margin-left: 0;
    }

    .commentItem {
        display: flex;
        margin-top: 20px;
    }
}

.avatar {
    width: 24px;
    height: 24px;
}

.sendBox {
    display: flex;
    align-items: center;
    gap: 5px;

    input {
        flex: 1;
        border: none;
        padding: 10px;
        margin: 5px;
    }

    .sendBtn {
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        color: #42b983;
        padding: 5px 10px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
    }
}

@media (max-width:1180px) {
    .detailBox {
        flex-direction: column;

    }
}
</style>