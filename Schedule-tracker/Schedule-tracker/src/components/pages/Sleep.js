import React from 'react';
import { Box, Stack, Button, ButtonGroup, TextField, InputAdornment, Snackbar, Alert } from "@mui/material"

export default function PageSleep() {

  let [allSleeps, setAllSleeps] = React.useState(JSON.parse(localStorage.getItem("allSleeps")) || []);
  let [currentSleep, setCurrentSleep] = React.useState(JSON.parse(localStorage.getItem("currentSleep")) || {});
  let [currentlyTracking, setCurrentlyTracking] = React.useState(localStorage.getItem("currentlyTracking") != null ? JSON.parse(localStorage.getItem("currentlyTracking")) : false);

  function toggleTracking() {
    if (currentlyTracking) {

      // Stop tracking
      const newSleep = { ...currentSleep, end: new Date().toLocaleString() };
      allSleeps.push(newSleep);

      // Reset
      currentSleep = {};
      currentlyTracking = false;
      setAllSleeps(allSleeps);
      setCurrentSleep({});
      setCurrentlyTracking(false);

    } else {

      // Start tracking
      let startAfterMinutes = 20;
      var calculatedTime = { start: new Date(new Date().getTime() + startAfterMinutes * 60000).toLocaleString() };
      currentSleep = calculatedTime;
      currentlyTracking = true;
      setCurrentSleep(calculatedTime);
      setCurrentlyTracking(true);

    }

    // Update storage
    localStorage.setItem("allSleeps", JSON.stringify(allSleeps));
    localStorage.setItem("currentSleep", JSON.stringify(currentSleep));
    localStorage.setItem("currentlyTracking", JSON.stringify(currentlyTracking));

    // Sent to back-end
    fetch('http://' + window.location.hostname + ':4000/v1/sleep', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ allSleeps: allSleeps })
    })
      .then(res => {
        if (res.status === 200) {
          console.log("Success!");
        } else {
          console.log("Failure! Status Code: " + res.status);
        }
      });

  }

  function deleteAll() {
    localStorage.clear();
    setCurrentlyTracking(false);
    setCurrentSleep({});
    setAllSleeps([]);
  }

  return (
    <>
      <p>
        {JSON.stringify(currentlyTracking)}<br />
        {JSON.stringify(currentSleep)}<br />
        {allSleeps.map((val, index) => {
          return (
            <>
              {index + " " + JSON.stringify(val)}<br />
            </>
          );
        })}
      </p>

      <Stack direction="row" spacing={1} sx={{
        width: '94%',
        left: "3%",
        position: "fixed",
        bottom: "1.7%",
      }}>
        <Button variant="contained" color="error" onClick={deleteAll} sx={{ width: '20%' }}>Delete All</Button>
        <Button variant="contained" color={currentlyTracking ? "secondary" : "success"} onClick={toggleTracking} sx={{ width: '80%' }}>
          {currentlyTracking ? "Stop Tracking" : "Start Tracking"}
        </Button>
      </Stack>
    </>
  );

}