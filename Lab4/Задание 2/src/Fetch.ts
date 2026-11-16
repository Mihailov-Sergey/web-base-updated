import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

/**
 * Необходимо реализовать функцию для получения первых 5 постов с нечётными id
 */
export async function getOddPosts(): Promise<PostDTO[]> {
	return (await api.getPosts()).filter((post) => post.id % 2 !== 0).slice(0, 5);
}

/**
 * Необходимо реализовать функцию для получения первых 5 комментариев с чётными id
 */
export async function getEvenComments(): Promise<CommentDTO[]> {
	return (await api.getComments()).filter((comment) => comment.id % 2 === 0).slice(0, 5);
}