export default async function getCommentByPost({id}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {cache:"force-cache"});//SSG
    if(!response.ok) throw new Error('Please try again')
    const comments = await response.json();

    return comments;
    
}