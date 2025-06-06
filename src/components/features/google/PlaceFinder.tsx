import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Geocode from 'react-geocode'
import { LocationMarkerIcon } from '@heroicons/react/solid'

const PlaceFinder = ({
  lat = 18.3077629,
  lng = -78.3378779,
}: {
  lat?: any
  lng?: any
}) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 15,
  }
  useEffect(() => {
    // Place ID
    Geocode.fromAddress('SKylark Negril').then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        const placeId = response.results[0].place_id
        console.log(lat, lng, placeId)
        // ChIJ5zukn_8M2Y4RnrZZ9bfSiqs
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCL2r1aZH7V0CgYjM-iecpOme5vZrRh4fs',
          libraries: ['places', 'geometry', 'drawing', 'visualization'],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <LocationMarkerIcon className="h-10 w-10 text-blue" />
      </GoogleMapReact>
    </div>
  )
}

export default PlaceFinder
