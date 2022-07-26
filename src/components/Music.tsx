import React from "react";
import { Item } from "../features/spotify/spotifySlice";

const Music = (props: { item: Item }) => {
  const { item } = props;
  return (
    <div className={item.data?.id}>
      <p>
        {item.data?.name} - {item.data?.artists?.items[0].profile.name}
      </p>
      <img src={item.data?.albumOfTrack?.coverArt?.sources[0].url} />
    </div>
  );
};

export default Music;
