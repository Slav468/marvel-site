import { ErrorMsg } from '../components/errorMsg/ErrorMsg';
import Spinner from '../components/spinner/Spinner';

const setContentWithLoading = (process, Component, newItemLoading) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
		case 'loading':
			return newItemLoading ? <Component /> : <Spinner />;
		case 'confirmed':
			return <Component />;
		case 'error':
			return <ErrorMsg />;
		default:
			throw new Error('Unknown');
	}
};

export default setContentWithLoading;
