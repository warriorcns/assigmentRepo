import { PredefinedViewportEnum } from '../helpers/methods';
import * as methods from '../helpers/methods';
import { selectors } from '../helpers/controls';

const viewPortSizes = [PredefinedViewportEnum['samsung-s10'], PredefinedViewportEnum['full-hd']];

let items = ['buy some cheese', 'feed the cat'];

/**
 * Add items to list for desktop and mobile version
 */

describe('Add items to list for desktop and mobile version', function () {
	viewPortSizes.forEach(size => {
		context(`${size}`, () => {
			it(`Add item`, function () {
				testBody(size);
			});
		});
	});
});

export function testBody(size = PredefinedViewportEnum['full-hd']) {
	if (Cypress._.isArray(size)) cy.viewport(size[0], size[1]);
	else cy.viewport(size);

	if (size == PredefinedViewportEnum['samsung-s10']) {
		cy.visit(Cypress.env('url'), {
			onBeforeLoad: win => {
				Object.defineProperty(win.navigator, 'userAgent', {
					value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
				});
			},
		});
	}

	methods.enterValue(selectors.todoIntput, items[0]);
	methods.pressEnterInInput(selectors.todoIntput);
	methods.enterValue(selectors.todoIntput, items[1]);
	methods.pressEnterInInput(selectors.todoIntput);

	cy.get('ul.todo-list > li').then(tdi => {
		methods.assertElementContainsText(tdi[0], items[0]);
		methods.assertElementContainsText(tdi[1], items[1]);
		methods.assertElementsInListCount(tdi, 2);
	});
}
