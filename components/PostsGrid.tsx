import { Post } from '@/lib/api';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Heart, MessageCircle } from 'lucide-react';

interface Props {
  posts: Post[];
}

export default function PostsGrid({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <section id="posts" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Последние посты</h2>
          <p className="text-gray-500">Постов пока нет</p>
        </div>
      </section>
    );
  }

  return (
    <section id="posts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Последние посты</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              {post.images && post.images[0] ? (
                <img 
                  src={post.images[0]} 
                  alt="Post" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Нет изображения</span>
                </div>
              )}
              
              <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{format(new Date(post.createdAt), 'd MMMM yyyy', { locale: ru })}</span>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post._count?.likes || 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post._count?.comments || 0}
                  </span>
                </div>
              </div>
              
              {post.user && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{post.user.name}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
