/*
 * Interface Segregation Principle
 *
 * "Clients should not depend upon interfaces that they don’t use." For the sake of
 * React applications, we'll translate it into “components shouldn’t depend on props
 * that they don’t use”.
 *
 * To better illustrate this principle, we will use TypeScript. Here we have an
 * item list which renders thumbnails. The thumbnails are passed a video object
 * with all its properties. However, the thumbnail component only uses the coverUrl.
 *
 * Why is this a problem? If we change the video object structure, we will have to
 * change the thumbnail component as well. This is a violation of the Interface
 * Segregation Principle as the thumbnail component depends on properties of a Video
 * object that it doesn’t use.
 *
 * The solution is to remove excessive properties from the props passed to the
 * thumbnail component so that it only depends on the properties it needs. In our
 * case only on the coverUrl.
 *
 * See the refactored code in the after.jsx file.
 *
 */

interface Video {
  title: string;
  duration: number;
  coverUrl: string;
}

// if we update the Video interface to this NewVideo interface, we will have to
// update the Thumbnail component as well which will require more work, create
// possibility for introducing new bugs, require more time to test and make our
// code more fragile.
interface NewVideo {
  title: string;
  duration: number;

  urls: {
    coverUrl: string;
    videoUrl: string;
  }
}

interface ThumbnailProps {
  video: Video;
}

const Thumbnail = ({ video }: ThumbnailProps) => {
  return <img src={video.coverUrl} />;
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
          video={item}
        />
      )}
    </ul>
  );
};

