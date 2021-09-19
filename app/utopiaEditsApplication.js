class UtopiaEditsApplication {
	#utopiaPageTracker;
	#configurationProvider;

	#enchantmentPageHandler;
	#sciencePageHandler;
	#utopiaTrainArmyPageHandler;

	constructor() {
		this.#utopiaPageTracker = new UtopiaPageTracker();
		this.#configurationProvider = new ConfigurationProvider();

		this.#enchantmentPageHandler = new UtopiaEnchantmentPageHandler(this.#configurationProvider);
		this.#sciencePageHandler = new UtopiaSciencePageHandler(this.#configurationProvider);
		this.#utopiaTrainArmyPageHandler = new UtopiaTrainArmyPageHandler(this.#configurationProvider);
	}

	run() {
		var enchantmentPageHandler = this.#enchantmentPageHandler;
		var sciencePageHandler = this.#sciencePageHandler;
		var utopiaTrainArmyPageHandler = this.#utopiaTrainArmyPageHandler;

		this.#configurationProvider.initialize(() => {
			// App initialization
			switch (this.#utopiaPageTracker.getCurrentPage().Id) {
				case "enchantment":
					enchantmentPageHandler.handleInitialized();
					enchantmentPageHandler.handleLoaded();
					break;
				case "train_army":
					utopiaTrainArmyPageHandler.handleLoaded();
					break;
				case "science":
					sciencePageHandler.handleLoaded();
					break;
				default:
					break;
			}

			// App page loaded programatically
			this.#utopiaPageTracker.addPageLoadedCallback(function (utopiaPage) {

				switch (utopiaPage.Id) {
					case "enchantment":
						enchantmentPageHandler.handleLoaded();
						break;
					case "train_army":
						utopiaTrainArmyPageHandler.handleLoaded();
						break;
					case "science":
						sciencePageHandler.handleLoaded();
						break;
					default:

						break;
				}
			});
		});
	}
}