import React from 'react'

// All component animations will be governed by an 'isHovered' prop.  Normally this will trigger
// On mouseEnter/mouseLeave, but for mobile or mouse-less screens it should trigger given a scroll position.
// This HOC governs that behavior by appropriately passing 'isHovered'.

function withHoverBehaviors(Wrapped) {
	class Hover extends React.Component {
		constructor(props) {
			super(props);

			this.HOCRef = React.createRef();

			this.state = {
				hasScrollListener: false,
				isHovered: false
			}

			this.handleMouseEnter = this.handleMouseEnter.bind(this);
			this.handleMouseLeave = this.handleMouseLeave.bind(this);
		}

		componentDidMount() {
			const {hasScrollListener} = this.state;

			if(window.innerWidth < 500) {
				window.addEventListener('scroll', this.controlHoverForMobile);
				this.setState({hasScrollListener: true});
			};

			window.addEventListener('resize', this.resizeCallback);
		}

		componentWillUnmount() {
			if(this.state.hasScrollListener) {
				window.removeEventListener('scroll', this.controlHoverForMobile);
			}

			window.removeEventListener('resize', this.resizeCallback);
		}

		resizeCallback = () => {
			const {hasScrollListener} = this.state;

			if(!hasScrollListener && window.innerWidth <= 500) {
				window.addEventListener('scroll', this.controlHoverForMobile);
				this.setState({hasScrollListener: true});
			}

			if(hasScrollListener && window.innerWidth > 500) {
				window.removeEventListener('scroll', this.controlHoverForMobile);
				this.setState({hasScrollListener: false, isHovered: false});
			}
		}

		controlHoverForMobile = () => {
			const midpoint = (window.innerHeight / 2);
			const {top, bottom} = this.HOCRef.current.getBoundingClientRect();
			

			if(midpoint > top && midpoint <= bottom) {
				this.setState({isHovered: true});
			}

			if(midpoint > bottom || midpoint < top){
				this.setState({isHovered: false});
			}
		}

		handleMouseEnter() {
			if(!this.state.isHovered) {
				this.setState({isHovered: true});
			}
		}

		handleMouseLeave(){
			if(this.state.isHovered) {
				this.setState({isHovered: false});
			}
		}

		testFnProp() {

		}

		render() {
			return(
				<Wrapped
					{...this.props}
					HOCRef={this.HOCRef}
					isHovered={this.state.isHovered}
					handleMouseEnter={this.handleMouseEnter}
					handleMouseLeave={this.handleMouseLeave}
				/>
			)
		}
	}

	return Hover;
}

export default withHoverBehaviors;