import * as methods from '../helpers/methods';
import * as test1 from './test1.cy';

let items = ['buy some cheese', 'feed the cat'];

describe('Add items to list for desktop and mobile version + ', function () {
	it(`test2`, function () {
		test1.testBody();
		cy.get('ul.todo-list > li').then(tdi => {
			methods.checkElementInList(tdi[0], true, 0);
			methods.assertIfElementInListIsToggled(tdi[0]);
		});
	});
});
