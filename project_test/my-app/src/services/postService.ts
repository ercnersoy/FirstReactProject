export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email:string;
    body:string;
}


export async function getPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
        throw new Error("Postlar alınamadı");
    }

    return response.json();
}

export async function getPostById(id: string): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
        throw new Error("Post detayı alınamadı");
    }

    return response.json();
}

export async function getPostComments(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!response.ok) {
    throw new Error("Yorumlar alınamadı");
  }

  return response.json();
}