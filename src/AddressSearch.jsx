import React, { useEffect } from 'react'

const identity = (x) => x

export default function AddressSearch ({onPlaceChanged = identity}) {

  useEffect(() => {
    const textfield = document.getElementById('automagic')

    const autocomplete = new window.google.maps.places.Autocomplete(textfield, {
      types: ['address']
    })
    autocomplete.setFields(['address_component'])
    autocomplete.addListener('place_changed', (e) => {
      const {'address_components': addr} = autocomplete.getPlace()

      const address = {
        street: `${addr[0]['short_name']} ${addr[1]['long_name']}`,
        city: addr[3]['long_name'],
        state: addr[5]['short_name'],
        zip: addr[7]['long_name']
      }

      onPlaceChanged(address)
    })

    return identity
  })

  return (
    <>
      <input type="text" id="automagic" placeholder="Look for something hot" style={{width: '600px'}}/>
    </>
  )
}
