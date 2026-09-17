function formatCommentDate(value) {
  if (!value) {
    return "Baru saja";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Baru saja";
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function CommentCard({ comment }) {
  return (
    <article className="relative border-b border-black/15 py-[18px] dark:border-white/15">
      <div className="flex items-center justify-between gap-4">
        <strong className="text-[0.9rem]">
          {comment.user_name || "Guest"}
        </strong>

        <span className="font-mono text-[0.62rem] text-[#68665f] dark:text-[#a7a49d]">
          {formatCommentDate(comment.created_at)}
        </span>
      </div>

      <p className="mt-[9px] text-[0.88rem] leading-[1.65] text-[#68665f] dark:text-[#a7a49d]">
        {comment.content}
      </p>

      {comment.is_pinned ? (
        <small className="mt-2.5 inline-flex bg-[#b8df14] px-1.5 py-1 font-mono text-[0.56rem] font-black text-[#101010] dark:bg-[#d8ff3e] dark:text-[#090909]">
          PINNED
        </small>
      ) : null}
    </article>
  );
}
