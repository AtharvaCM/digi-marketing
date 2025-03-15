export const YouTubeEmbed = ({ value }: { value: { url: string } }) => {
  if (!value?.url) {
    return null;
  }

  const videoId = value.url.split('v=')[1]?.split('&')[0]; // Extract video ID from the URL
  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <div className="youtube-embed">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      />
    </div>
  );
};
