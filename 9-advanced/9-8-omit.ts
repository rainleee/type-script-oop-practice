{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //Omit는 any type을 받는다.
  type VideoMetadata = Omit<Video, 'url' | 'data' | 'dsds'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMeta(id: string): VideoMetadata {
    return {
      id,
      title: 'video',
    };
  }
}
