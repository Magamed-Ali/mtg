import {Component} from "react";
import logo from "./icons8-программирование-на-ноутбуке-64.png"


type MyState = {
    languages: string[]
    watch: any
}

export class Header extends Component<any, MyState> {
    timerID: NodeJS.Timeout | undefined;
    constructor(props: any) {
        super(props);
        this.state = {
            languages: ["ru", "en"],
            watch: new Date().toLocaleTimeString('en-GB', {hour12: false})
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            watch: new Date().toLocaleTimeString('en-GB' , {hour12: false}),
        });
    }
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="watch">
                    {this.state.watch}
                </div>
                <div className="languages">
                    <select>
                        <option value="someOption">{this.state.languages[0]}</option>
                        <option value="otherOption">{this.state.languages[1]}</option>
                    </select>
                </div>
            </div>
        )
    }
}