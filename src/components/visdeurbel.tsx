export function VisDeurbel() {
  return (
    <article className="p-4 w-2xl max-w-full aspect-[560/315] relative">
      <h2 className="text-3xl absolute top-4 left-4">🐟</h2>
      <iframe
        className="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/jSW9HrPLNBo?si=KvEJDUZktzI7Y8c_&controls=0&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </article>
  );
}
