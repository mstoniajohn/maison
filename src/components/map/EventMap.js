import { useEffect, useState } from 'react'
import Image from 'next/image'
import ReactMapGl, { Marker } from 'react-map-gl'
import Geocode from 'react-geocode'
import { FaLess, FaMapPin } from 'react-icons/fa'

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    zoom: 12,
    width: '100%',
    height: '500px',
  })
  useEffect(() => {
    Geocode.fromAddress('Skylark Negril Beach Resort').then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng)
        setLat(lat)
        setLng(lng)
        setViewport({ ...viewport, latitude: lat, longitude: lng })
        setLoading(false)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)

  if (loading) return false

  console.log(lat, lng)

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key="123" latitude={lat} longitude={lng}>
        <FaMapPin className="pin-color" />
      </Marker>
    </ReactMapGl>
  )
}
