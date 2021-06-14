import { useEffect, useMemo } from "react";
import { FeatureGroup, useMap, Popup } from "react-leaflet";
import PopupHeader from "./Popup/PopupHeader";
import PopupContact from "./Popup/PopupContact";
import PopupDetails from "./Popup/PopupDetails";
import GeometryLayer from "./GeometryLayer";
import { nanoid } from "nanoid";

function MapFeatures({ boundingBox, features }) {
  const map = useMap();

  useEffect(() => {
    const { minLat, minLng, maxLat, maxLng } = boundingBox;
    const bottomLeftCorner = [minLat, minLng];
    const topRightCorner = [maxLat, maxLng];

    map.fitBounds([bottomLeftCorner, topRightCorner]);
  }, [map, boundingBox]);

  return (
    <>
      {useMemo(
        () =>
          features.map(({ properties, geometry }) => {
            return (
              <FeatureGroup key={nanoid()}>
                {Object.entries(properties).length && (
                  <Popup>
                    <PopupHeader properties={properties} />
                    <PopupContact properties={properties} />
                    <PopupDetails properties={properties} />
                  </Popup>
                )}
                <GeometryLayer geometry={geometry} />
              </FeatureGroup>
            );
          }),
        [features]
      )}
    </>
  );
}

export default MapFeatures;
