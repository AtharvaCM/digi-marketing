import { Flex, Text } from '@sanity/ui';
import YouTubePlayer from 'react-player/youtube';
import type { PreviewProps } from 'sanity';

const YouTubePreview = (props: PreviewProps) => {
  const { title: url } = props;

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? <YouTubePlayer url={url} /> : <Text>Add a YouTube URL</Text>}
    </Flex>
  );
};

export default YouTubePreview;
