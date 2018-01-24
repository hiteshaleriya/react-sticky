import React from 'react';

export default class Sticky extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sticky: ""
        };
        this.footer = document.querySelector("footer");
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnMount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const offsetBottom = this.footer.offsetTop-window.pageYOffset;
        if (window.pageYOffset > this.props.offsetTop && offsetBottom > 296) {
            if (!this.state.sticky) {
                this.setState({
                    sticky: "sticky"
                });
            }
        } else if(this.state.sticky) {
            this.setState({
                sticky: ""
            });
        }
    }

    render() {
        return <div className={"list " + this.state.sticky}>
            <div className="item">List Item 1</div>
            <div className="item">List Item 2</div>
            <div className="item">List Item 3</div>
            <div className="item">List Item 4</div>
            <div className="item">List Item 5</div>
            <div className="item">List Item 6</div>
            <div className="item">List Item 7</div>
            <div className="item">List Item 8</div>
            <div className="item">List Item 9</div>
            <div className="item">List Item 10</div>
        </div>
    }

}
