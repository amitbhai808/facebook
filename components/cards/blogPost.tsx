export const BlogPostCard = ({ title, description, content }: { title: string; description?: string; content: string }) => (
    <a href='#' className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">{title}</h5>
        {description && <p className="font-normal text-gray-700">{description}</p>}
        <p className="font-normal text-gray-700">{content}</p>
    </a>
);
