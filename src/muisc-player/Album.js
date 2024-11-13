import React from "react";
import Grid from "@mui/material/Grid2";
import { Card } from "@mui/material";
import Item from "./Item";

export default function Album({ setSong }) {
  return (
    <div className="main">
      <Grid container spacing={2}>
        <Grid size={12}>
          {/* <Item src="assets/images/main-poster.jpg" alt="main poster" /> */}

          <Card>
            <Item
              src="assets/images/main-poster.jpg"
              alt="main poster"
              song="assets/music/main-poster.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
        <Grid size={6}>
          <Card>
            <Item
              src="assets/images/album1.jpg"
              alt="love story"
              song="assets/music/song1.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
        <Grid size={6}>
          <Card>
            <Item
              src="assets/images/album2.jpg"
              alt="Rangde"
              song="assets/music/song2.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
        <Grid size={3}>
          <Card>
            <Item
              src="assets/images/album3.jpg"
              alt="Jathe ratnalu"
              song="assets/music/song3.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
        <Grid size={3}>
          <Card>
            <Item
              src="assets/images/album4.jpg"
              alt="Uppena"
              song="assets/music/song4.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
        <Grid size={3}>
          <Card>
            <Item
              src="assets/images/album5.jpg"
              alt="samajvaragamana"
              song="assets/music/song5.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
        <Grid size={3}>
          <Card>
            <Item
              src="assets/images/album6.jpg"
              alt="geetha govindam"
              song="assets/music/song6.mp3"
              setSong={(song) => {
                setSong(song);
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
