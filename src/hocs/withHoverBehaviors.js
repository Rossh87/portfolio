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
		}

		componentDidMount() {
			// Add scroll-based hovering any time a touch event occurs
			window.addEventListener('touchstart', this.addScrollListener);

			// Add scroll-based hovering any time viewport is smaller
			// than a given width.
			if(window.innerWidth < 500) {
				this.addScrollListener()
			};

			// Add listener to implement above logic on viewport resize.
			window.addEventListener('resize', this.resizeCallback);
		}

		componentWillUnmount() {
			if(this.state.hasScrollListener) {
				window.removeEventListener('scroll', this.controlHoverForMobile);
			}

			window.removeEventListener('resize', this.resizeCallback);
			window.removeEventListener('touchstart', this.controlHoverForMobile);
		}

		resizeCallback = () => {
			if(window.innerWidth < 500) {
				this.addScrollListener()
			};
		}

		addScrollListener = () => {
			const {hasScrollListener} = this.state;

			// Ensure that window resize does not lead to multiple listeners
			if(!hasScrollListener) {
				window.addEventListener('scroll', this.controlHoverForMobile);
				this.setState({hasScrollListener: true});
			}
		}

		controlHoverForMobile = () => {
			const height = window.innerHeight;
			const width = window.innerWidth;
			const hasBroken = width > 495;

			// Shenanigans here to increase the height of the 'trigger'
			// area if the layout has gone horizontal for wider screens.
			const breakPoint = hasBroken ?
				height / 2
				:
				height / 3;

			let {top, bottom} = this.HOCRef.current.getBoundingClientRect();

			if(hasBroken) {
				top -= 50;
				bottom += 50;
			}
			

			if(breakPoint > top && breakPoint <= bottom) {
				this.setState({isHovered: true});
			}

			if(breakPoint > bottom || breakPoint < top){
				this.setState({isHovered: false});
			}
		}

		handleMouseEnter = () => {
			this.setState({isHovered: true});
		}

		handleMouseLeave = () => {
			this.setState({isHovered: false});
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