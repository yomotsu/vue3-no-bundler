import { defineComponent, Fragment, reactive, toRefs } from 'https://unpkg.com/vue@3.0.2/dist/vue.esm-browser.prod.js';
import { MyComponent } from './MyComponent.js';

export const AppRoot = defineComponent( {
	setup() {

		const state = reactive( {
			count: 0,
		} );

		const setCount = ( value ) => state.count = value;

		return {
			state: toRefs( state ),
			setCount,
		};

	},
	components: {
		MyComponent,
	},
	template: `
		<Fragment>
			<MyComponent
				:count="state.count"
				:setCount="setCount"
			/>
		</Fragment>
	`,
} );
