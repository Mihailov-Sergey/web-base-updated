import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

/**
 * Необходимо реализовать функцию для получения первых 5 постов с нечётными id
 */
export async function getOddPosts(): Promise<PostDTO[]> {
	const allPosts = await api.getPosts();
	const oddPosts = allPosts.filter((post) => {
		const isOdd = post.id % 2 !== 0;
		return isOdd;
	});
	return oddPosts.slice(0, 5);
};

/**
 * Необходимо реализовать функцию для получения первых 5 комментариев с чётными id
 */
export async function getEvenComments(): Promise<CommentDTO[]> {
	const allComments = await api.getComments();
	const evenComments = allComments.filter((comment) => {
        const isEven = comment.id % 2 === 0;
        return isEven;
    });
	return evenComments.slice(0, 5);
}