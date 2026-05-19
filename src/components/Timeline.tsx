type TimelineItem = {
  year: string;
  title: string;
  summary: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.year} className="glass rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.32em] text-ink-300">{item.year}</p>
          <h3 className="mt-2 text-lg font-semibold text-ink-50">{item.title}</h3>
          <p className="mt-2 text-sm text-ink-200">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}
