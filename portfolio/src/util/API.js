import EMS from "../images/ems_screenshot_dyn.PNG";
import FS from "../images/flightsavermap.PNG";
import FT from "../images/fitnesstracker_sc.PNG";
import FW from "../images/fivewire_sc.PNG";
import WD from "../images/weather_dashboard_sc.png";
import MG from "../images/mdgen_sc.PNG";

const projects = [
  {
    id: 1,
    title: "Flight Saver",
    lang: ["Javascript", "jQuery", "Sky Scanner API", "Algolia/Leaflet API", "Materialize"],
    desc: "This is a conceptual app for travel planning and scheduling, allowing users to search flights and plan trips.",
    repo: "https://github.com/kshaq777/flight-saver",
    image: FS
  },
  {
    id: 2,
    title: "Workout Tracker",
    lang: ["MongoDB", "Mongoose", "Node/Express", "Chart.js"],
    desc: "Allow users to record their workout data and visualize their data.",
    repo: "https://github.com/kshaq777/workout",
    image: FT
  },
  {
    id: 3,
    title: "FiveWire",
    lang: ["mySQL", "Sequelize", "MVC / API Routes", "Spotify API"],
    desc: "A conceptual app to create a virtual hangout with a digital jukebox to convene with friends during Quarantine.",
    repo: "https://github.com/kshaq777/fivewire",
    image: FW
  },
  {
    id: 4,
    title: "Employee Manager",
    lang: ['SQL', 'Node/Express', 'Inquirer'],
    desc: "This app allows users to manage an employee directory via command-line interface. This is accomplished by generating queries based off input from the user.",
    repo: "https://github.com/kshaq777/employee-manager",
    image: EMS
  },
  {
    id: 5,
    title: "Weather Dashboard",
    lang: ["Javascript & jQuery", "One-Time Weather API", "Algolia Places API"],
    desc: "Search for a city with auto-complete functionality, and get the 6-day forecast for it.",
    repo: "https://github.com/kshaq777/weather-dashboard",
    image: WD
  },
  {
    id: 6,
    title: "Markdown Generator",
    lang: ["Node / Express", "Inquirer", "Write File"],
    desc: "Command-line Application to auto-generate markdown files for dev projects.",
    repo: "https://github.com/kshaq777/markdown-generator",
    image: MG
  }
]
  
const API = {
  getProjects: function() {
    return new Promise(resolve => {
      resolve(projects);
    });
  }
}
  
  export default API;