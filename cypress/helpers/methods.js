export const PredefinedViewportEnum = {
	'iphone-SE': [375, 667],
	'iphone-x': 'iphone-x',
	'macbook-15': 'macbook-15',
	'samsung-s10': 'samsung-s10',
	'full-hd': [1920, 1080],
	'4k': [3840, 2160],
};
Object.freeze(PredefinedViewportEnum);

/**
 * For future expansion input cases
 */
export const items = {
	1: 'asdf1',
	2: '123456',
	3: '!@# !@#',
};
Object.freeze(items);

export function enterValue(fieldSelector, newValue) {
	cy.log(`**Enter new value**`);
	cy.log(fieldSelector);
	cy.get(fieldSelector).type(newValue);
}

export function pressEnterInInput(fieldSelector) {
	cy.log(`**Press ENTER**`);
	cy.get(fieldSelector).type('{enter}');
}

export function assertElementContainsText(listItem, containsString) {
	cy.log(`**Assert if element contains text**`);
	cy.get(listItem).should('include.text', containsString);
}

export function assertElementsInListCount(list, excpectedLength) {
	cy.log(`**Assert if list have proper length**`);
	cy.get(list).should('have.length', excpectedLength);
}

/**
 * for what is that number used? Is it really neded? (It was in the example to implement)
 */
export function checkElementInList(item, toggle, number) {
	if (toggle) cy.get(item).find('.toggle').click();
}

export function assertIfElementInListIsToggled(item) {
	cy.log(`**Assert if element is toggled**`);
	cy.get(item).should('have.class', 'completed');
}
