import GoogleMapReact from 'google-map-react';

const MapComponent = () => {
    const mapStyles ={
        width: '100%',
        height: '400px'
    }
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };
    return (
        <div style={{ ...mapStyles }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
        </div>
    )
}

export default MapComponent