import type { ProjectVideo } from '@/data/portfolio';
import { youtubeEmbedUrl, vimeoEmbedUrl, driveEmbedUrl } from '@/lib/utils';

export function VideoPlayer({
  video,
  title,
}: {
  video: ProjectVideo;
  title: string;
}) {
  const landscapeClass =
    'relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-bg-surface';

  const portraitClass =
    'relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-bg-surface';

  switch (video.type) {
    case 'youtube':
      return (
        <div className={landscapeClass}>
          <iframe
            src={youtubeEmbedUrl(video.src)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      );

    case 'vimeo':
      return (
        <div className={landscapeClass}>
          <iframe
            src={vimeoEmbedUrl(video.src)}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      );

    case 'drive':
      return (
        <div className={landscapeClass}>
          <iframe
            src={driveEmbedUrl(video.src)}
            title={title}
            allow="autoplay"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      );

    case 'instagram':
      return (
        <div className={portraitClass}>
          <iframe
            src={`${video.src}embed`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allowFullScreen
          />
        </div>
      );

    case 'facebook':
      return (
        <div className={portraitClass}>
          <iframe
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
              video.src
            )}&show_text=0`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      );

    case 'mp4':
    default:
      return (
        <div className={portraitClass}>
          <video
            src={video.src}
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      );
  }
}