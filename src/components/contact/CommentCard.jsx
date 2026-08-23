import { ImageWithFallback } from "../common/ImageWithFallback";

const DATE_FORMATTER = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function CommentCard({ comment, isPinned = false }) {
  const dateValue = new Date(comment.created_at);

  const date = Number.isNaN(dateValue.getTime())
    ? ""
    : DATE_FORMATTER.format(dateValue);

  const initials = String(comment.user_name || "?").slice(0, 2);

  return (
    <article
      className={`grid grid-cols-[42px_1fr] gap-3 rounded-2xl border p-3.5 ${
        isPinned
          ? "border-violet-400/20 bg-violet-500/[0.07]"
          : "border-white/[0.075] bg-slate-950/40"
      }`}
    >
      <ImageWithFallback
        src={comment.profile_image}
        alt={comment.user_name}
        className="h-[42px] w-[42px] rounded-xl object-cover"
        initials={initials}
      />

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-1.5">
          <strong className="text-sm text-white">{comment.user_name}</strong>

          {isPinned && (
            <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-extrabold text-violet-300">
              Admin
            </span>
          )}

          {date && (
            <time className="ml-auto text-[11px] text-slate-600">{date}</time>
          )}
        </div>

        <p className="mt-1.5 overflow-wrap-anywhere text-sm leading-6 text-slate-400">
          {comment.content}
        </p>
      </div>
    </article>
  );
}
