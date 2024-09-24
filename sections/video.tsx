import { VideoWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description YouTube video URL
   */
  videoUrl?: VideoWidget;
  /**
   * @description Title of the video section
   * @format rich-text
   */
  title?: string;
  /**
   * @description Description of the video
   * @format textarea
   */
  description?: string;
}

export default function YouTubeVideoSection({
  videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  title = "Check out our latest video",
  description = "This video showcases our product in action. Watch and learn more about what we offer!"
}: Props) {
  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="relative w-full mb-6" style={{ paddingBottom: "56.25%" }}>
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <p className="text-lg text-center max-w-2xl mx-auto">{description}</p>
    </div>
  );
}