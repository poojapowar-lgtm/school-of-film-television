import React from "react";
import "./events.css";

 
const eventsData = [
  {
    id: 1,
    title: "Editing Department",
    image: "/assets/images/programs (4).jpg",
    points: [
      "Workshop on Dialogue Editing",
      "Workshop on Narrative Editing",
      "Workshop on Documentary Editing",
      "Workshop on Colour Grading and Correction",
      "Advanced Workshop on Feature Film Editing"
    ],
  },
  {
    id: 2,
    title: "Cinematography Department",
    image: "https://picsum.photos/600/400",
    points: [
      "Workshop on commercial lighting technique",
      "Workshop on Day-for-night Cinematography",
      "Workshop on Green Screen &amp; VFX lighting",
      "Workshop on Camera Movement and Grip Movement",
         "Masterclass – Script to Screen with High – End Digital Cinema Cameras.",
    ],
  },
  {
    id: 3,
    title: "Direction &amp; Screenplay Writing Department",
    image: "https://picsum.photos/600/400",
    points: [
      "Workshop on Directing Actors",
      "Workshop on Advanced Screenwriting Workshop",
      "Workshop on Production Design for Directors",
      "Workshop on Documentary Filmmaking",
         "Masterclass – Script to Screen Direction Process",
    ],
  },
  ,
  {
    id: 4,
    title: "Sound Recording &amp; Designing",
    image: "https://picsum.photos/600/400",
    points: [
      "Workshop on Architectural Acoustics and Studio Design",
      "Workshop on 5.1 Surround Sound Mixing",
      "Workshop on Sound Design for Films",
      "Workshop on Sync Sound Recording and Mixing",
    ],
  },
  ,
  {
    id: 5,
    title: "VFX &amp; Motion Graphics",
    image: "https://picsum.photos/600/400",
    points: [
      "Workshop on Unreal Engine for Virtual Production &amp; CGI Environment",
      "Workshop on Visual Effects and Virtual Production in Filmmaking",
      "Workshop on Compositing Techniques using The Foundry Nuke",
      "Workshop on Colour Correction and Grading with DaVinci Resolve",
    ],
  },

];

const Events = () => {
  return (
    <div>
      <h2 className="innerpage-title">Events & Activities</h2>

      <div className="events-container">
        <div className="events-grid">
          {eventsData.map((event) => (
            <div className="event-card" key={event.id}>
              {/* Left Image Section */}
              <div
                className="event-left"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="event-head">
                  <h3 className="event-title">{event.title}</h3>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="event-right">
                <ul className="page-list ">
                  {event.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
