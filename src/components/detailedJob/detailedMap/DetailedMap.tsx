import React from "react";
import ReactMapGL, {Marker} from 'react-map-gl';
import Media from "react-media";
import token from "../../../services/mapboxToken";
import svgPath from "../../../services/svgPath";
import styles from './DetailedMap.module.css';

interface IMap {
    name: string,
    address: string,
    phone: string,
    email: string,
    location: {
        lat: number,
        long: number
    }
}

const DetailedMap: React.FC<IMap> = ({ name, address, phone, email, location }) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Contacts</h2>
            <hr className={styles.border} />
            <div className={styles.container}>
                <div className={styles.feedback__container}>
                    <div className={styles.into__container}>
                        <h2 className={styles.name}>{name}</h2>
                    <div className={styles.address__container}>
                        <svg className={styles.svg__position}>
                            <use href={svgPath.position + "#position"}></use>
                        </svg>
                        <p className={styles.address}>{address}</p>
                    </div>
                    <p className={styles.contact}>{phone}</p>
                    <p className={styles.contact}>{email}</p>
                    </div>
                </div>
                <div className={styles.map__container}>
                    <div className={styles.map}>
                    <Media queries={{
                        small: "(max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => (
                            <>
                                {matches.small &&
                                    <ReactMapGL
                                        initialViewState={{
                                            latitude: location.lat,
                                            longitude: location.long,
                                            zoom: 14
                                        }}
                                        style={{ width: '360px', height: '255px' }}
                                        mapStyle="mapbox://styles/mapbox/streets-v9"
                                        mapboxAccessToken={token}
                                    >
                                        <Marker latitude={location.lat} longitude={location.long}>
                                            <svg className={styles.svg__marker}>
                                                <use href={svgPath.marker + "#marker"}></use>
                                            </svg>
                                        </Marker>    
                                    </ReactMapGL>
                                }
                                {matches.large &&
                                    <ReactMapGL
                                        initialViewState={{
                                            latitude: location.lat,
                                            longitude: location.long,
                                            zoom: 14
                                        }}
                                        style={{ width: '394px', height: '255px' }}
                                        mapStyle="mapbox://styles/mapbox/streets-v9"
                                        mapboxAccessToken={token}
                                    >
                                        <Marker latitude={location.lat} longitude={location.long}>
                                            <svg className={styles.svg__marker}>
                                                <use href={svgPath.marker + "#marker"}></use>
                                            </svg>
                                        </Marker>  
                                    </ReactMapGL>
                                }
                            </>
                        )}
                    </Media>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailedMap;