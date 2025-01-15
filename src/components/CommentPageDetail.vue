<template>
    <TheModal @close="this.$store.dispatch('hidePostDetails')">
        <div class="detailBox">
            <div class="imgBox">
                <picture>
                    <img :src="post.image" />
                </picture>
            </div>
            <div class="rightBox">
                <div class="meta">
                    <div class="info">
                        <img src="../assets/avatarDefault.png" alt="" class="avatar">
                        <span>{{ post.user?.name }}</span>
                    </div>
                    <div class="des">
                        <p>
                            {{ post.description }}
                        </p>
                    </div>
                    <span class="time">5分鐘之前發布</span>
                </div>
                <div class="commentBox">
                    <div class="commentItem">
                        <div class="user">
                            <img src="../assets/avatarDefault.png" alt="" class="avatar">
                        </div>
                        <div class="inner">
                            <div class="topBox">
                                <p class="content"><span
                                        class="userName">巧柔</span>沒吃過！看起來超讚！沒吃過！看起來超讚！沒吃過！看起來超讚！沒吃過！看起來超讚！</p>
                            </div>
                            <div class="downBox">
                                <span class="time">{{ dateToRelative(post.publishedAt) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actionBox">
                    <PostActions
                        :likes="post.liked_bies" 
                        :likedByMe="post.likedByMe" 
                        @likeClick="this.$store.dispatch('toggleLike', post.id)"
                        :favors="post.favored_bies" 
                        :favoredByMe="post.favoredByMe" 
                        @favorClick="this.$store.dispatch('toggleFavor', post.id)"
                        :comments="post.comments"
                    />
                    <div class="sendBox">
                        <input type="text" name="comment" id="" class="commentInput" placeholder="你覺得好吃嗎？">
                        <button class="sendBtn">發佈</button>
                    </div>
                </div>
            </div>
        </div>
    </TheModal>
</template>

<script setup>
import PostActions from "./PostActions.vue";
import TheModal from "../components/TheModal.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { dateToRelative } from "@/utils/date";

const store = useStore();
const post = computed(() => store.getters.postDetails);
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

.actions {
    gap: 5px;
    display: flex;
    align-items: center;
    row-gap: 4px;
    padding: 0 10px;

    svg {
        width: 32px;
        height: 32px;
        grid-row: 1 / 2;
        cursor: pointer;

        &:nth-child(1):hover {
            fill: red;
            stroke: none;
        }
    }



    span {
        font-size: 14px;
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