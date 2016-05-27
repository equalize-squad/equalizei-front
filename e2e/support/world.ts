export interface IWorld {
	currentUrl() : webdriver.promise.Promise<string>;
}

export class World implements IWorld {
	currentUrl():webdriver.promise.Promise<string> {
		return browser.getCurrentUrl();
	}
}
