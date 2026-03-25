const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.wispapp.ru';

export interface Post {
  id: string;
  content: string;
  images: string[];
  createdAt: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  _count: {
    likes: number;
    comments: number;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  _count: {
    posts: number;
  };
}

export async function getLatestPosts(limit = 6): Promise<Post[]> {
  try {
    const res = await fetch(`${API_URL}/posts?limit=${limit}`, {
      cache: 'no-store',
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_URL}/categories`, {
      cache: 'no-store',
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
