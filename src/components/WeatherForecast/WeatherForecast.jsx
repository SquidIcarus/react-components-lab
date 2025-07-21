import './WeatherForecast.css';

function WeatherForecast(props) {
    console.log("props are", props);
    return (
        <div className="weather">
            <h2>{props.forecast.day}</h2>
            <img src={props.forecast.img} alt={props.forecast.imgAlt} />
            <p><span>conditions: {props.forecast.conditions} </span></p>
            <p><span>time: {props.forecast.time}</span></p>
        </div>
    )
}
export default WeatherForecast;