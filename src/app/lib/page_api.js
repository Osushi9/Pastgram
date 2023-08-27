import { api_fetch_json } from "./api";

export async function get_home() {
    const { limit, tag, thumnails } = await api_fetch_json("/page/home");
    return { limit, tag, thumnails };
}

export async function get_postDetail(user_id) {
    const params = { user_id };
    const { limit, posts, tag, user } = await api_fetch_json("/page/post", "GET", params);
    return { limit, posts, tag, user };
}

export async function get_profile(user_id) {
    const params = { user_id };
    const { posts, user } = await api_fetch_json("/page/profile", "GET", params);
    return { posts, user }; 
}

export async function get_followee(user_id) {
    const params = { user_id };
    const { users } = await api_fetch_json("/page/followee", "GET", params);
    return { users };
}

export async function get_follower(user_id) {
    const params = { user_id };
    const { users } = await api_fetch_json("/page/follower", "GET", params);
    return { users };
}

export async function search_users(query) {
    const params = { query };
    const { users } = await api_fetch_json("/page/users", "GET", params);
    return { users };
}

export async function update_profile(name, profile_name, icon_path) {
    const params = { name, profile_name, icon_path };
    const { user } = await api_fetch_json("/page/profile", "POST", params);
    return { user };
}

export async function upload_post(image_path, taken_at) {
    const params = { image_path, taken_at };
    const { post } = await api_fetch_json("/page/post", "POST", params);
    return { post };
}