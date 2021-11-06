import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const exampleMapStyles = [
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeee",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
              color: "#333333"
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
              color: "#282828"
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "transit.station.bus",
        stylers: [
            {
              visibility: "off"
            },
        ],
    },

    {
        featureType: "labels",
        elementType: "labels.text.fill",
        stylers: [
            {
              color: "#92c890"
            },
        ],
    },
    {
        featureType: "labels",
        elementType: "labels.text.stroke",
        stylers: [
            {
              color: "#000"
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
              color: "#000"
            },
        ],
    }
];

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCbGRVYbOP2FM8-G0QT1A0iYi9Rf0qQCbI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `750px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: -1.3232518, lng: 36.8640073 }}
    options={{
      styles: exampleMapStyles,
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -1.3232518, lng: 36.8640073 }} />}
  </GoogleMap>
)

export default MyMapComponent
