import { withSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

import PluginCard from '../PluginCard';

const Header = ( { plugins } ) => {
	if ( ! plugins ) {
		return null;
	}

	return (
		<Fragment>
			{ Object.keys( plugins ).map( ( slug ) => {
				return (
					<PluginCard
						key={ slug }
						slug={ slug }
						data={ plugins[ slug ] }
					/>
				);
			} ) }
		</Fragment>
	);
};

export default withSelect( ( select ) => {
	const { getPlugins } = select( 'neve-dashboard' );
	return {
		plugins: getPlugins(),
	};
} )( Header );
