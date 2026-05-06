import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './map.styles.css';

const MAP_LIBRARIES = ['places'];
const GOOGLE_MAPS_SCRIPT_ID = 'tour-advisor-google-maps-script';

const MapContainer = ({ waypointsPlaces }) => {
  const [response, setResponse] = useState(null);
  const [directionsStatus, setDirectionsStatus] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const hasApiKey = Boolean(apiKey);
  const { isLoaded, loadError } = useLoadScript({
    id: GOOGLE_MAPS_SCRIPT_ID,
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
    preventGoogleFontsLoading: true
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    function successCallback(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setCoordinates({ lat: latitude, lng: longitude });
    }

    function errorCallback(error) {
      alert(`ERROR(${error.code}): ${error.message}`);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const directionsOptions = useMemo(
    () => ({
      origin: coordinates,
      destination: coordinates,
      travelMode: 'DRIVING',
      waypoints: (waypointsPlaces || []).map((place) => ({ location: place, stopover: true })),
      optimizeWaypoints: true,
      provideRouteAlternatives: true
    }),
    [waypointsPlaces, coordinates]
  );

  const directionsCallback = useCallback(
    (res) => {
      if (!res) return;

      if (res.status === 'OK' && response === null) {
        setResponse(res);
        setDirectionsStatus('OK');
      } else {
        console.warn('Directions request failed:', res.status, res);
        setDirectionsStatus(res.status);
      }
    },
    [response]
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: true
    }),
    []
  );

  const renderMap = () => {
    if (!isLoaded) {
      return <div className="map-loading-message">Loading map...</div>;
    }

    if (!coordinates) {
      return <div className="map-loading-message">Waiting for your location...</div>;
    }

    return (
      <GoogleMap
        id="direction-example"
        mapContainerStyle={{ height: '520px', width: '100%' }}
        center={coordinates}
        zoom={7}
        options={mapOptions}
      >
        {/* 1. Request the route only once */}
        {response === null && directionsStatus === null && (
          <DirectionsService options={directionsOptions} callback={directionsCallback} />
        )}

        {/* 2. Render the route once the response is received */}
        {response !== null && (
          <DirectionsRenderer
            options={{
              directions: response
            }}
          />
        )}
      </GoogleMap>
    );
  };

  const statusMessage = !hasApiKey
    ? 'Google Maps API key is missing. Add REACT_APP_GOOGLE_MAPS_API_KEY to frontend/tour-advisor-v1/.env.local and restart the React dev server.'
    : loadError
    ? `Unable to load Google Maps: ${loadError.message || 'check your API key and Maps JavaScript API settings.'}`
    : !isLoaded
    ? 'Loading map...'
    : directionsStatus === 'ZERO_RESULTS'
    ? 'No route found for the selected origin and destination. Try a more specific address or coordinates.'
    : directionsStatus === 'NOT_FOUND'
    ? 'One or more locations could not be found. Check origin, destination, and waypoints.'
    : directionsStatus === 'OK'
    ? null
    : directionsStatus
    ? `Directions failed: ${directionsStatus}`
    : coordinates
    ? 'Requesting route...'
    : 'Please provide a valid origin and destination to display the map.';

  return (
    <div className="map-card">
      <div className="map-card-header">
        <h3 className="map-card-title">Route Overview</h3>
        <p className="map-card-subtitle">A clean view of your planned journey with minimal distractions.</p>
      </div>
      <div className="map-frame">
        {renderMap()}
        {statusMessage && <div className="map-overlay-message">{statusMessage}</div>}
      </div>
      <div className="map-card-footer">
        <p className="map-card-note">Powered by Google Maps</p>
      </div>
    </div>
  );
};

export default MapContainer;
