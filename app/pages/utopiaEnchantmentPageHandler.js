class UtopiaEnchantmentPageHandler {
    #spellsList =
        [
            {
                "Name": "Aggression",
                "Title": "Max 24 days",
                "PositiveEffects": "+2 Soldier Offence Points",
                "NegativeEffects": "-2 Soldier Defence Points",
            },
            {
                "Name": "Animate Dead",
                "Title": "Province's next defensive battle",
                "PositiveEffects": "+50% Dead Troops as Soldiers",
                "NegativeEffects": null,
            },
            {
                "Name": "Anonymity",
                "Title": "Province's next attack",
                "PositiveEffects": "+Hidden +Unambushable",
                "NegativeEffects": "-100% Honor Gain -15% Gain",
            },
            {
                "Name": "Bloodlust",
                "Title": "Max X days",
                "PositiveEffects": "+10% Offensive Military Efficiency & Kills",
                "NegativeEffects": "+20% Military Losses",
            },
            {
                "Name": "Builders Boon",
                "Title": "Max 24 days",
                "PositiveEffects": "-25% Building Construction Time*",
                "NegativeEffects": null,
            },
            {
                "Name": "Cast Ritual",
                "Title": "Instant",
                "PositiveEffects": "+Ritual Progress",
                "NegativeEffects": null,
            },
            {
                "Name": "Clear Sight",
                "Title": "Max 22 days",
                "PositiveEffects": "+25% Catch Theives Chance",
                "NegativeEffects": null,
            },
            {
                "Name": "Divine Shield",
                "Title": "Max XX days",
                "PositiveEffects": "-20% Instant Spell Damage",
                "NegativeEffects": null,
            },
            {
                "Name": "Fanaticism",
                "Title": "Max 12 days",
                "PositiveEffects": "+5% Offensive Military Efficiency",
                "NegativeEffects": "-5% Defensive Military Efficiency",
            },
            {
                "Name": "Fertile Lands",
                "Title": "Max 30 days",
                "PositiveEffects": "+25% Food Production",
                "NegativeEffects": null,
            },
            {
                "Name": "Fountain of Knowledge",
                "Title": "Max XX days",
                "PositiveEffects": "+10% Science Book Production",
                "NegativeEffects": null,
            },
            {
                "Name": "Ghost Workers",
                "Title": "Max XX days",
                "PositiveEffects": "-20% Jobs Filled for Max Build. Eff.",
                "NegativeEffects": null,
            },
            {
                "Name": "Greater Protection",
                "Title": "Max XX days",
                "PositiveEffects": "+5% Defensive Military Efficiency",
                "NegativeEffects": null,
            },
            {
                "Name": "Hero's Inspiration",
                "Title": "Max 24 days",
                "PositiveEffects": "-30% Wage Cost -25% Military Training Time",
                "NegativeEffects": null,
            },
            {
                "Name": "Illuminate Shadows",
                "Title": "Max XX days",
                "PositiveEffects": "-20% Theivery Op Damage",
                "NegativeEffects": null,
            },
            {
                "Name": "Inspire Army",
                "Title": "Max 24 days",
                "PositiveEffects": "-15% Military wages -20% Military Training Time",
                "NegativeEffects": null,
            },
            {
                "Name": "Invisibility",
                "Title": "Max 22 days",
                "PositiveEffects": "+20% Offensive Theivery Eff. -20% Theives Lost",
                "NegativeEffects": null,
            },
            {
                "Name": "Love and Peace",
                "Title": "Max 22 days",
                "PositiveEffects": "+2%-3% Birthrate +40% Warhorse Production",
                "NegativeEffects": null,
            },
            {
                "Name": "Mage's Fury",
                "Title": "Max 12 days",
                "PositiveEffects": "+25% Offensive WPA",
                "NegativeEffects": "-25% Defensive WPA",
            },
            {
                "Name": "Magic Shield",
                "Title": "Max 24 days",
                "PositiveEffects": "+20% Defensive Magic Efficiency",
                "NegativeEffects": null,
            },
            {
                "Name": "Minor Protection",
                "Title": "Max 24 days",
                "PositiveEffects": "+5% Defensive Military Efficiency",
                "NegativeEffects": null,
            },
            {
                "Name": "Mind Focus",
                "Title": "Max 20 days",
                "PositiveEffects": "+50% Wizard Production",
                "NegativeEffects": null,
            },
            {
                "Name": "Mist",
                "Title": "Max X days",
                "PositiveEffects": "-10% Attacker gain",
                "NegativeEffects": null,
            },
            {
                "Name": "Mist",
                "Title": "Max X days",
                "PositiveEffects": "-10% Attacker Battle Gains",
                "NegativeEffects": null,
            },
            {
                "Name": "Mystic Aura",
                "Title": "Next evil spell cast upon you from abroad",
                "PositiveEffects": "+Repels spell",
                "NegativeEffects": null,
            },
            {
                "Name": "Nature's Blessing",
                "Title": "Max 36 days",
                "PositiveEffects": "+Storm & Drought Immune +33% Cure Plague Chance",
                "NegativeEffects": null,
            },
            {
                "Name": "Paradise",
                "Title": "Instant",
                "PositiveEffects": "+1-10 Acres",
                "NegativeEffects": null,
            },
            {
                "Name": "Patriotism",
                "Title": "Max 20 days",
                "PositiveEffects": "+30% Draft Speed -30% Propaganda Damage",
                "NegativeEffects": null,
            },
            {
                "Name": "Quick Feet",
                "Title": "Max X days",
                "PositiveEffects": "-15% Attack Time",
                "NegativeEffects": null,
            },
            {
                "Name": "Reflect Magic",
                "Title": "Max 18 days",
                "PositiveEffects": "+25% Offensive Spell Reflection",
                "NegativeEffects": null,
            },
            {
                "Name": "Revelation",
                "Title": "Max X days",
                "PositiveEffects": "+30% Scientist Production Speed",
                "NegativeEffects": null,
            },
            {
                "Name": "Shadow Light",
                "Title": "Next theif Op on Province",
                "PositiveEffects": "+Revealed",
                "NegativeEffects": null,
            },
            {
                "Name": "Town Watch",
                "Title": "Max 18 days",
                "PositiveEffects": "+1 Defence Point per 5 peasants",
                "NegativeEffects": null,
            },
            {
                "Name": "Tree of Gold",
                "Title": "Instant",
                "PositiveEffects": "+26%-53% of Income",
                "NegativeEffects": null,
            },
            {
                "Name": "War Spoils",
                "Title": "Max 6 hours",
                "PositiveEffects": "+Instant Traditional March Battle Gains",
                "NegativeEffects": null,
            },
            {
                "Name": "Wrathful Smite",
                "Title": "Max XX days",
                "PositiveEffects": "+20% Attacker Casualties",
                "NegativeEffects": null,
            },
        ];
    #configurationProvider;
    #viewModel;
    constructor(configurationProvider) {
        this.#configurationProvider = configurationProvider;
        this.#viewModel = new UtopiaEnhancementPageViewModel(configurationProvider);
    }

    handleInitialized() {
        this.#UpdateSpellDescriptionsOnSpellslistAdded();
    }

    handleLoaded() {
        var spellsList = this.#spellsList;
        this.#viewModel.addSelfSpellDescriptions(spellsList);
        this.#viewModel.hideActiveSelfSpellsList();
        this.#viewModel.hideSelfSpellDropDownCast();
    }

    #UpdateSpellDescriptionsOnSpellslistAdded() {
        var spellsList = this.#spellsList;
        var viewModel = this.#viewModel;
        OnElementAdded('.game-content form', 'table#spellslist', function () {
            viewModel.addSelfSpellDescriptions(spellsList);
        });
    }
}

class UtopiaEnhancementPageViewModel {
    #configurationProvider;
    constructor(configurationProvider) {
        this.#configurationProvider = configurationProvider;
    }

    hideActiveSelfSpellsList() {
        if (this.#canhideActiveSelfSpellsList()) {
            var tables = $("#content-area > .game-content > table");
            tables.each((index, element) => {
                var table = $(element)
                var ths = table.find("thead > tr > th");

                if (this.#headersMatchActiveSelfSpellsList(ths)) {
                    var row = ths.eq(0).parent();
                    var thead = row.parent();
                    var table = thead.parent();
                    table.hide();
                }
            });
        }
    }

    #headersMatchActiveSelfSpellsList(ths) {

        if (ths.length !== 3)
            return false;

        if (!ths.eq(0).text().includes("Spell Name"))
            return false;
        if (!ths.eq(1).text().includes("Duration"))
            return false;
        if (!ths.eq(2).text().includes("Effects"))
            return false;

        return true;
    }

    #canhideActiveSelfSpellsList() {
        return this.#configurationProvider.getConfigurationCopy()['check-hide-self-spell-dropdown-cast'];
    }

    hideSelfSpellDropDownCast() {
        if (this.#canHideSelfSpellDropDownCast()) {
            var inputs = $("#content-area > .game-content > form > input.button");
            
            inputs.each((index, element) => {
                var input = $(element);
                var propValue = input.prop("value");

                if (propValue === "Cast Spell") {

                    input.hide();
                    var table = input.prev("table");
                    table.hide();
                }
            });
        }
    }

    #canHideSelfSpellDropDownCast() {
        return this.#configurationProvider.getConfigurationCopy()['check-hide-self-spell-dropdown-cast'];
    }

    addSelfSpellDescriptions(spellsList) {
        if (this.#canAddSpellDescriptions()) {
            // Add tooltips to spells spellslist
            let elements = this.#getSpellsListElements();
            let outerContext = this;
            elements.each(function (index, element) {
                var element = $(this);
                var elementText = element.text();
                if (StringHelper.isBlank(elementText))
                    return true;

                var spell = spellsList.find((spellItem) => elementText.includes(spellItem.Name));
                if (spell && outerContext.#noSpellDescription(element)) {

                    // Add spell description
                    var button = element.children("span.castspell");

                    var spellDescriptionOutHTML = outerContext.#getSpellDescriptionOuterHTML(spell);
                    button.before(spellDescriptionOutHTML);

                    // Format cast spell button
                    var magicSymbol = "⛤";
                    var cast = magicSymbol + ' (';
                    var content = button.text().replace("Cast:", cast) + ')';
                    button.text(content);
                }
            });
        }
    }

    #canAddSpellDescriptions() {
        return this.#configurationProvider.getConfigurationCopy()['check-hide-self-spell-dropdown-cast'];
    }

    #getSpellsListElements() {
        var elements = $('table#spellslist tbody tr td');
        return elements;
    }

    #getSpellDescriptionOuterHTML(spell) {
        var spellDescription = '<div class="spell-description">';
        if (spell.Title)
            spellDescription = spellDescription + '<span class="title">' + spell.Title + '</span><br>';
        if (spell.PositiveEffects)
            spellDescription = spellDescription + '<span class="positive-effect">' + spell.PositiveEffects + '</span><br>';
        if (spell.NegativeEffects)
            spellDescription = spellDescription + '<span class="negative-effect">' + spell.NegativeEffects + '</span><br>';
        spellDescription = spellDescription + '</div>';
        return spellDescription;
    }

    #noSpellDescription(jqueryElement) {
        return jqueryElement.children("div.spell-description").length === 0;
    }
}