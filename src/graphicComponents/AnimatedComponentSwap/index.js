import React from 'react';

// Get util for key IDs
import shortid from 'shortid';

import './styles.scss';

class AnimatedComponentSwap extends React.Component {
	constructor(props) {
		super(props);

		// These variables don't need to be, and in fact should *not* 
		// be in 'oficial' state b/c they don't directly govern UI.  Also,
		// Setstate calls are async, which leads to very glitchy behavior when
		// governing scroll.
		this.timeoutID = null;
		this.canFire = true;
		this.scrollCount = 0;
		this.itemCount = this.props.children.length;

		this._manageScrollListener = this.manageScrollListener.bind(this);

		this.state = {
			isShownIndex: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		const {isShownIndex} = this.state;

		// Because we'll be calling setState on scroll (potentially many times),
		// We restrict re-rendering to changes that affect UI.
		return isShownIndex !== nextState.isShownIndex || this.props !== nextProps;
	}

	componentDidMount() {
		window.addEventListener('scroll', this._manageScrollListener)
	}

	componentWillUnmount() {
		console.log('unmount');
		window.removeEventListener('scroll', this._manageScrollListener);
		clearTimeout(this.timeoutID);
	}

	manageScrollListener(e){
		const {canFire, scrollCount} = this;
		window.scrollTo(0, 0);
		
		if(canFire) {
			this.canFire = false;
			this.timeoutID = setTimeout(() => this.canFire = true, 400);
			this.scrollCount++;
			this.manageIndexOnScroll()
		}
	}

	manageIndexOnScroll() {
		const {scrollCount, itemCount} = this;

		if(scrollCount <= itemCount - 1){
			this.incrementIndex();
		}

		if(scrollCount > itemCount){
			window.removeEventListener('scroll', this._manageScrollListener);
			this.props.dismissHero();
			window.scrollTo(0, 1);
		}
	}


	incrementIndex = () => {
		const len = this.props.children.length;
		const newIndex = (this.state.isShownIndex + 1) % (len)
		const newState = newIndex < 0 ?
			len - 1 : newIndex

		this.setState({isShownIndex: newState});
	}

	decrementIndex = () => {
		const len = this.props.children.length;
		const newIndex = (this.state.isShownIndex - 1) % (len)
		const newState = newIndex < 0 ?
			len - 1 : newIndex;

		this.setState({isShownIndex: newState});
	}

	renderChildren() {
		const {isShownIndex} = this.state;
		const SelectedComponent = this.props.children[isShownIndex];

		return(
			<div className={this.props.receivedClassName}>
				{React.cloneElement(SelectedComponent, {
						incrementIndex: this.incrementIndex,
						decrementIndex: this.decrementIndex
					})
				}
			</div>
		)
	}

	render() {

		return(
			<React.Fragment>
				{this.renderChildren()}
			</React.Fragment>
		)
	}
}

export default AnimatedComponentSwap;
