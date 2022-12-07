import arrow from "../img/arrow.svg";
import marker from "../img/marker.svg";
import position from "../img/position.svg";
import rectangle from "../img/rectangle.svg";
import shape from "../img/shape.svg";
import star from "../img/star.svg";
import stars from "../img/stars.svg";
import big__stars from "../img/big__stars.svg";

interface svgObject {
    arrow: string,
    marker: string
    position: string,
    rectangle: string,
    shape: string,
    star: string,
    stars: string,
    big__stars: string
}

const svgPath: svgObject = {
    arrow,
    marker,
    position,
    rectangle,
    shape,
    star,
    stars,
    big__stars
};

export default svgPath;