class ConfigurationProvider {
    #settingsArray =
        [
            { "Id": "check-add-self-spell-description" },
            { "Id": "check-hide-self-spell-dropdown-cast"},
            { "Id": "check-hide-active-self-spells-list" },
            { "Id": "check-hide-active-self-spells-list" },

            { "Id": "check-add-science-milestones" },

            { "Id": "check-add-train-army-future-column" },
        ];
    #viewModel = new ConfigurationViewModel();

    constructor() {
       
    }


    initialize(callback) {
        let viewModel = this.#viewModel;
        var settingIds = this.#settingsArray.map((x) => x.Id);
        chrome.storage.local.get(settingIds, (result) => {
            //console.log("loaded settings:");
            //console.log(result);

            viewModel.configuration = result;
            chrome.storage.onChanged.addListener(function (changes, namespace) {
                for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
                    viewModel.configuration[key] = newValue;

                    //console.log(
                    //    `Storage key "${key}" in namespace "${namespace}" changed.`,
                    //    `Old value was "${oldValue}", new value is "${newValue}".`
                    //);
                }
            });
            callback();
        });
    }

    getConfigurationCopy() {
        let configuration = this.#viewModel.configuration;
        let configurationCopy = JSON.parse(JSON.stringify(configuration));
        return configurationCopy;
    }
}

class ConfigurationViewModel {

    configuration;
    constructor() {
        this.configuration = null;
    }

}