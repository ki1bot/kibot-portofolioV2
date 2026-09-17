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
    <article className="guestbook-note">
      <div className="guestbook-note-head">
        <strong>{comment.user_name || "Guest"}</strong>

        <span>{formatCommentDate(comment.created_at)}</span>
      </div>

      <p>{comment.content}</p>

      {comment.is_pinned ? <small>PINNED</small> : null}
    </article>
  );
}
