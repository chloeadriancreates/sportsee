import "./Counter.scss";
import { useEffect, useState } from "react";
import calories from "../../assets/calories.svg";
import carbs from "../../assets/carbs.svg";
import lipids from "../../assets/lipids.svg";
import protein from "../../assets/protein.svg";

function Counter(props) {
    const { value, type } = props;
    const [unit, setUnit] = useState();
    const [icon, setIcon] = useState();

    useEffect(() => {
        switch (type) {
            case "Calories":
                setIcon(calories);
                setUnit("kCal");
                break;
            case "Glucides":
                setIcon(carbs);
                setUnit("g");
                break;
            case "Lipides":
                setIcon(lipids);
                setUnit("g");
                break;
            case "Protéines":
                setIcon(protein);
                setUnit("g");
                break;
            default:
                break;
        }
    }, [type]);

    return (
        <div className="counter">
            <img src={icon} alt={type} />
            <div className="counter-caption">
                <h2 className="counter-caption-value">{value}{unit}</h2>
                <p className="counter-caption-type">{type}</p>
            </div>
        </div>
    );
}

export default Counter;