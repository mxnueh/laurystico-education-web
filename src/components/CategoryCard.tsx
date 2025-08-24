type Props = {
  title: string;
  description: string;
  href: string;
  color?: 'violet' | 'cyan' | 'green';
  image?: string;
};

const colorMap = {
  violet: 'from-violet-500/15',
  cyan: 'from-cyan-500/15',
  green: 'from-green-500/15',
} as const;

export default function CategoryCard({ title, description, href, color = 'violet', image }: Props) {
  return (
    <a href={href} className="block group rounded-card border bg-white overflow-hidden">
      <div className={`aspect-video rounded-t-[inherit] bg-gradient-to-br ${colorMap[color]} to-transparent relative overflow-hidden`}>
        {image && (
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl text-ink group-hover:text-brand-primary transition-colors tracking-tight mb-3">{title}</h3>
        <p className="text-base text-muted leading-relaxed">{description}</p>
      </div>
    </a>
  );
}

