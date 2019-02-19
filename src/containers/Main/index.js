import React from 'react';

// Local component
import Routes from '../Routes';
import Wrapper from '../Wrapper';
import Navbar from '../Navbar';
import Hero from 'components/Hero';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.timerID = null;

		this.state = {
			heroIsOpen: true,
			heroIsMounted: true
		}
	}

	dismissHero = () => {
		this.setState({heroIsOpen: false});

		this.timerID = setTimeout(() => {
			this.setState({
				heroIsMounted: false,
				heroIsOpen: false
			});
		}, 500);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.manageHero)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.manageHero);
		clearTimeout(this.timerID);
	}

	manageHero = (e) => {
		const {heroIsMounted} = this.state;
		if(window.scrollY === 0 && !heroIsMounted) {
			this.setState({
				heroIsMounted: true,
			});

			this.timerID = setTimeout(() => {
				this.setState({heroIsOpen: true});
			}, 200);
		}
	}

	renderHero() {
		return this.state.heroIsMounted ?
			<Hero dismissHero={this.dismissHero} isOpen={this.state.heroIsOpen} />
			:
			null;
	}

	render() {
		return (
			<React.Fragment>
			{this.renderHero()}
				<Navbar />
				<Wrapper>
					<Routes />
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default Main;