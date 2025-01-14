import {
    getJwtToken
} from "./auth";
import {
    request
} from "../utils/request";


export async function createPost(image, description) {
    const formData = new FormData();
    formData.append("files", image);
    formData.append("data", JSON.stringify({
        description
    }));
    // console.log([...formData.entries()]);
    await fetch("/api/posts", {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${getJwtToken()}`,
        },
    });
}


export async function loadPosts(filters = "") {
    const response = await request(
        "/api/posts?populate=*" + (filters && `&${filters}`)
    );
    // console.log(response.data?.[0].attributes?.image?.data?.[0]?.attributes?.url)
    return response.data.map((post) => ({
        id: post?.id,
        ...post?.attributes,
        image: post?.attributes?.image?.data?.[0]?.attributes?.url,
        user: {
            id: post?.attributes?.user?.data?.id,
            ...post?.attributes?.user?.data?.attributes,
        },
    }));
}

export async function likePost(id) {
    const response = await request(`/api/posts/${id}/like`, {
        method: "PUT",
    });
    return response.data;
}

export async function favorPost(id) {
    const response = await request(`/api/posts/${id}/favor`, {
        method: "PUT",
    });
    return response.data;
}