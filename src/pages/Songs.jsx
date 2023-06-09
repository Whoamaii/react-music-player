import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import SongCard from "../components/SongCard/songcard";
import "./styles.css";

import { addTodo, setIsLoaded, setSongId } from "../redux/actions";
import { connect } from "react-redux";

const Songs = ({
  addTodo,
  todosRedux,
  setIsLoaded,
  isLoaded,
  currentTrackIndex,
  songId,
  setSongId,
}) => {
  const __URL__ = "http://localhost:1337";

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const { data } = await axios.get(`${__URL__}/api/v1/songs`);
    addTodo(data["songs"]);
    // console.log(data.songs);

    setIsLoaded(true);
  };

  return (
    <div className="componentPlaylist">
      {setIsLoaded && todosRedux === null ? (
        <div>loading...</div>
      ) : todosRedux && todosRedux.length > 0 ? (
        todosRedux.map((song, index) => {
          return (
            <SongCard
              songIdCur={song._id}
              trackIndex={index}
              title={song.title}
              album={song.album}
              artistName={song.artist}
              songSrc={song.song}
              userId={song.uploadedBy}
              file={song.file}
            />
          );
        })
      ) : (
        <div>No songs found</div>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  todosRedux: state.todos.todos,
  isLoaded: state.todos.isLoaded,
  songUrl: state.songReducer.songUrl,
  currentTrackIndex: state.playerReducer.currentTrackIndex,
  songId: state.songReducer.songId,
});

export default connect(mapStatetoProps, { addTodo, setIsLoaded, setSongId })(
  Songs
);
