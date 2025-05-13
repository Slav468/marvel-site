import { ErrorMsg } from '../components/errorMsg/ErrorMsg';
import Skeleton from '../components/skeleton/Skeleton';
import Spinner from '../components/spinner/Spinner';

const setContent = (process, Component, data) => {
	switch (process) {
		case 'waiting':
			return <Skeleton />;
		case 'loading':
			return <Spinner />;
		case 'confirmed':
			return <Component data={data} />;
		case 'error':
			return <ErrorMsg />;
		default:
			throw new Error('Unknown');
	}
};

export default setContent;
