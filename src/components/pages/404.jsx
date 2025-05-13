import { Link } from 'react-router-dom';
import { ErrorMsg } from '../errorMsg/ErrorMsg';

const Page404 = () => {
	return (
		<div>
			<ErrorMsg />
			<p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
				Page doesn`t exist
			</p>
			<Link
				to='/'
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '24px',
					display: 'block',
				}}
			>
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
