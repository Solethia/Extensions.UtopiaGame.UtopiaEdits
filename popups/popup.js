var settingsArray =
    [
        { "Id": "check-add-self-spell-description", "DefaultValue": true},
        { "Id": "check-hide-self-spell-dropdown-cast", "DefaultValue": true},
        { "Id": "check-hide-active-self-spells-list", "DefaultValue": true },

        { "Id": "check-add-science-milestones", "DefaultValue": true },

        { "Id": "check-add-train-army-future-column", "DefaultValue": false },
    ];

$(document).ready(function () {
    //set initial state and listen for changes.
    $("input").attr("disabled", true);

    var settingIds = settingsArray.map((x) => x.Id);
    chrome.storage.local.get(settingIds, (result) => {
        console.log("loaded settings:");
        console.log(result);
        settingsArray.forEach((setting) => {
            var getValue = result[setting.Id];
            if (typeof getValue === 'undefined')
                createCheckboxSetting(setting.Id, setting.DefaultValue);
            else
                createCheckboxSetting(setting.Id, getValue);
        });
        $("input").attr("disabled", false);
    });
});

function createCheckboxSetting(id, value) {
    var checkboxHtmlId = '#' + id;
    var checkBox = $(checkboxHtmlId);
    addCheckboxChangeSettingsUpdater(id, value, checkBox);
}

function addCheckboxChangeSettingsUpdater(id, value, checkBox) {
    console.log(id +" setup with value: " + value);
    checkBox.prop("checked", value);
    checkBox.val(value);

    checkBox.change(function () {
        $("input").attr("disabled", true);
        var newValue = this.checked;
        console.log(id + " changed to: " + newValue);
        var settingsObject = createSettingsObject(id, newValue);
        console.log('saving');
        console.log(settingsObject);
        chrome.storage.local.set(settingsObject, function () {
            checkBox.val(newValue);
            $("input").attr("disabled", false);
        });
    });
}

function createSettingsObject(id, value) {
    var settingsObject = {};
    settingsObject[id] = value;
    return settingsObject;
}