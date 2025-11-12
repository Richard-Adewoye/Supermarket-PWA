import PostCard from './PostCard';
import type { FeaturedPostData } from '../../lib/blogMock';
import LoadMoreButton from '../../components/blog/LoadMoreButton';


export default function RecentPostsSection({ posts }: { posts: FeaturedPostData[] }) {
return (
<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold">Recent blog posts</h2>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{posts.map((p) => (
<PostCard key={p.id} post={p} />
))}
</div>


<div className="mt-8 flex justify-center">
<LoadMoreButton />
</div>
</section>
);
}