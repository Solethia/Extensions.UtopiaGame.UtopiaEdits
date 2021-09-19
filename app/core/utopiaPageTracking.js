class UtopiaPageTracker {

	#viewModel;

	constructor() {
		this.#viewModel = new UtopiaPageTrackerViewModel();
		this.#OnPageLoaded();
	}

	addPageLoadedCallback(callback) {
		this.#viewModel.pageLoadedCallbacks.push(callback);
	}

	#OnPageLoaded() {
		var tracker = this;
		var viewModel = this.#viewModel;
		OnElementRemoved('div#content-area', 'div#loadstatus', function (removedElement) {
			var newPage = tracker.getCurrentPage();
			//if (viewModel.currentPage.Id != newPage.Id) {
				console.log('page changed detected: ' + newPage.Id + ' from ' + viewModel.currentPage.Id);
				viewModel.currentPage = newPage;
				console.log(viewModel.pageLoadedCallbacks);
				viewModel.pageLoadedCallbacks.forEach(pageLoadedCallback => pageLoadedCallback(newPage));
			//}
		});
	}

	getCurrentPage() {
		var foundPage = this.#viewModel.pages.find((utopiaPage) => utopiaPage.Path && document.URL.includes(utopiaPage.Path))
		if (foundPage)
			return foundPage;
		else
			return this.#viewModel.pages[0];
	}
}

class UtopiaPageTrackerViewModel {
	pages;
	cachedPage;

	pageLoadedCallbacks;

	constructor() {
		this.pages = [
			{ "Id": "untracked", "Path": null },
			{ "Id": "enchantment", "Path": "/game/enchantment" },
			{ "Id": "train_army", "Path": "/game/train_army" },
			{ "Id": "science", "Path": "/game/science" },
		];
		this.currentPage = this.pages[0];
		this.pageLoadedCallbacks = [];
	}
}