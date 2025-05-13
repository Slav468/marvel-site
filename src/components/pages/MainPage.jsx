import { useState } from 'react';
import { Helmet } from 'react-helmet';
import decoration from '../../img/vision.png';
import CharList from '../CharList/CharList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/randomChar';
import CharSearchForm from '../searchForm/CharSearchForm';

const MainPage = () => {
	const [char, setChar] = useState(null);

	const onCharSelected = id => {
		setChar(id);
		console.log('render 2');
	};

	return (
		<>
			<Helmet>
				<meta name='description' content='Marvel information portal' />
				<title>Marvel info portal</title>
			</Helmet>

			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>

			<div className='char__content'>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>

				<div className='wrapper'>
					<ErrorBoundary>
						<CharInfo charId={char} />
						<ErrorBoundary>
							<CharSearchForm />
						</ErrorBoundary>
					</ErrorBoundary>
				</div>
			</div>
			<img className='bg-decoration' src={decoration} alt='vision' />
		</>
	);
};

export default MainPage;
