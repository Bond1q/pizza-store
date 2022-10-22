import axios from 'axios'
import { useState } from 'react'
interface Position {
   coords: Coords
}
interface Coords {
   latitude: number
   longitude: number
}

interface LocationInfo extends Coords {
   city: string
   countryName: string
}

export const useUserLocation = () => {
   const [isClicked, setIsClicked] = useState(false)
   const [location, setLocation] = useState<LocationInfo>({
      city: '',
      countryName: '',
      latitude: 0,
      longitude: 0,
   })

   const success = async (position: Position) => {
      const { latitude, longitude } = position.coords
      const url = `https://api.bigdatacloud.net/data/
		reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

      if (!isClicked) {
         try {
            const res = await axios.get<LocationInfo>(url)

            setLocation(res.data)
         } catch (error) {
            console.log(error)
         }
         setIsClicked(true)
      }
   }

   const error = () => {
      console.log('Cannot get the location')
      setIsClicked(false)
   }

   const getLocation = () => {
      navigator.geolocation.getCurrentPosition(success, error)
   }

   return { location, getLocation }
}
