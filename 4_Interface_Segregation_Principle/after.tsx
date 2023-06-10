/*
 * Interface Segregation Principle
 *
 * In this refactored example we have removed the excessive properties from the
 * props passed to the thumbnail component and made it depend only on the
 * coverUrl property.
 *
 * Now if we change the video object structure, we will not have to change the
 * thumbnail component as well.
 */


interface Video {
  title: string;
  duration: number;
  coverUrl: string;
}

// now, if we update the Video interface to this NewVideo interface, we will
// only have to update the parameters passed to the Thumbnail component without
// having to change the Thumbnail component itself.
interface NewVideo {
  title: string;
  duration: number;

  urls: {
    coverUrl: string;
    videoUrl: string;
  }
}

interface ThumbnailProps {
  coverUrl: string;
}

const Thumbnail = ({ coverUrl }: ThumbnailProps) => {
  return <img src={coverUrl} />;
};

interface VideoListProps {
  items: Array<Video>;
}

const VideoList = ({ items }: VideoListProps) => {
  return (
    <ul>
      {items.map(item =>
        <Thumbnail
          key={item.title}
          coverUrl={item.coverUrl}

          {/* if we change Video to the NewVideo we will just do the following: */}
          {/* coverUrl={item.urls.coverUrl} */}
        />
      )}
    </ul>
  );
};
