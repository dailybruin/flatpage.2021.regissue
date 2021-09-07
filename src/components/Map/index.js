import React from "react";
import { Map, Marker, TileLayer, Polygon, ImageOverlay } from "react-leaflet";
import SideBar from "./Sidebar";
import "leaflet/dist/leaflet.css";
import 'react-image-lightbox/style.css';
import L from "leaflet";
import { config } from "../../config";
import mapImg from './images/campusmap.png';
import starImg from './images/star.png';

export const starIcon = new L.Icon({
    iconUrl: starImg,
    iconSize: [25, 25],
});
class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.refmarker = React.createRef();
        this.state = {
            lat: 34.069156,
            lng: -118.44418,
            zoom: 15,
            marker: {
                lat: 34.069156,
                lng: -118.44418
            },
            currentQuestion: 0,
            correctAnswers: new Array(10).fill(false),
            attemptsMade: new Array(10).fill(false),
        };
        this.questionChangeCallback = this.questionChangeCallback.bind(this);
        this.handleCloseCallback = this.handleCloseCallback.bind(this);
        this.handleLandmarkClick = this.handleLandmarkClick.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    handleCloseCallback(questionNum) {
        this.setState({ attemptsMade: questionNum });
    }

    questionChangeCallback(questionNum) {
        this.setState({ currentQuestion: questionNum });
    }

    handleLandmarkClick(index) {
        if (index === this.state.currentQuestion) {
            let newCorrAnswers = this.state.correctAnswers;
            newCorrAnswers[this.state.currentQuestion] = true;

            let newAttemptsMade = this.state.attemptsMade;
            newAttemptsMade[this.state.currentQuestion] = true;
            this.setState({ correctAnswers: newCorrAnswers, attemptsMade: newAttemptsMade });
        }
    }

    handleMapClick() {
        let newAttemptsMade = this.state.attemptsMade;
        newAttemptsMade[this.state.currentQuestion] = true;
        this.setState({ attemptsMade: newAttemptsMade });
    }

    render() {
        const transparentColor = "rgb(0,0,0,0)";
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="trivia-container">
                <div className="sidebar">
                    <SideBar
                        currentQuestion={this.state.currentQuestion}
                        handleCloseCallback={this.handleCloseCallback}
                        questionChangeCallback={this.questionChangeCallback}
                        attemptsMade={this.state.attemptsMade}
                        correctAnswers={this.state.correctAnswers}
                    />
                </div>
                <div className="map-container">
                    <div className="map-border">
                        <Map
                            center={position}
                            zoom={this.state.zoom}
                            minZoom={15}
                            maxBounds={[[34.07925, -118.45774], [34.058, -118.4362]]}
                            onClick={() => {
                                this.handleMapClick();
                            }}
                        >
                            <TileLayer
                                attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © <a href="http://mapbox.com">Mapbox</a>'
                                url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
                            />
                            {config.locations.map((loc, index) => {
                                return (<Marker
                                    key={loc.name}
                                    position={[loc.lat, loc.long]}
                                    icon={starIcon}
                                    opacity={this.state.correctAnswers[index] ? 1 : 0}
                                    interactive={false}
                                />);
                            })}
                            {config.locations.map((loc, index) => (
                                <Polygon
                                    key={loc.name}
                                    color={transparentColor}
                                    positions={loc.coordinates}
                                    onClick={() => {
                                        this.handleLandmarkClick(index);
                                    }}
                                />
                            ))}
                            <ImageOverlay
                                url={mapImg}
                                bounds={[[34.0791, -118.45655], [34.0569, -118.43669]]}
                            />
                        </Map>
                    </div>
                </div>
                <div className='main_by_line'>
                    {(window.innerWidth > 800)
                        ? <p className='byLineText'>
                            Graphic by Maria Tassone, Daily Bruin staff,
                            Interactive by Laurel Woods, Graphics Interactives editor and
                            Lindsey Parungo, assistant Graphics Interactives editor
                        </p>
                        : <p className='byLineText'>{`Graphic by Maria Tassone, Daily Bruin staff,\nInteractive by Laurel Woods, Graphics Interactives editor and\n Lindsey Parungo, assistant Graphics Interactives editor`}</p>}
                </div>
                
            </div>

        );
    }
};

export default MyMap;