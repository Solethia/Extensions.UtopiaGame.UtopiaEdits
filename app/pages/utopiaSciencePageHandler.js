class UtopiaSciencePageHandler {

    #viewModel;
    #configurationProvider;
    constructor(configurationProvider) {
        this.#configurationProvider = configurationProvider;
        this.#viewModel = new UtopiaSciencePageViewModel();
    }

    handleLoaded() {
        this.#addScienceMilestones();
    }

    #addScienceMilestones() {
        if (this.#canAddScienceMilestones()) {
            var sciClassFormat = "sci-origin";
            var mileStoneClassFormat = "sci-milestone";

            var viewModel = this.#viewModel;
            var rows = $("#content-area > .game-content > form > table > tbody > tr");
            rows.each(function (index, element) {
                var row = $(element)
                var tds = row.find("td");
                var scienceTypeCell = tds.eq(0);

                var science = viewModel.sciences.find((science) => scienceTypeCell.text().includes(science.Type));
                if (science) {
                    var booksCell = tds.eq(1);
                    var booksCount = new UtopiaResourceBar().getStatCellNumber(booksCell);
                    var spread = viewModel.getDefaultScienceTypeCurrentBookSpread(booksCount, science.Type);

                    var getSpan = function (inner, classAttr) { return '<span class="' + classAttr + '">' + inner + "</span>" };
                    var br = "<br>";

                    var newBooksCellHtml = getSpan(booksCount, sciClassFormat) + br;
                    spread.forEach((item) => newBooksCellHtml += getSpan("(" + NumberHelper.round(item.BookCount / 1000, 1) + "k) ", mileStoneClassFormat + " " + mileStoneClassFormat + "-" + item.Index))
                    booksCell.html(newBooksCellHtml);

                    var scienceEffectCell = tds.eq(2);
                    var newScienceHtml = getSpan(scienceEffectCell.text(), sciClassFormat) + br;
                    spread.forEach((item) => newScienceHtml += getSpan("(" + NumberHelper.round(item.EffectPercentage, 1) + "%) ", mileStoneClassFormat + " " + mileStoneClassFormat + "-" + item.Index))

                    //var factor = NumberHelper.round(science.Multiplier * 1000, 1)
                    //newScienceHtml += getSpan(factor, mileStoneClassFormat + " sci-factor");
                    scienceEffectCell.html(newScienceHtml);
                }
            });
        }
    }

    #canAddScienceMilestones() {
        return this.#configurationProvider.getConfigurationCopy()['check-add-science-milestones'];
    }
}

class UtopiaSciencePageViewModel {
    sciences = [
        { "Category": "Economy", "Type": "Alchemy", "Effect": "Income", "Multiplier": 0.0724 },
        { "Category": "Economy", "Type": "Tool", "Effect": "Building Effectiveness", "Multiplier": 0.0524 },
        { "Category": "Economy", "Type": "Housing", "Effect": "Population Limits", "Multiplier": 0.0262 },
        { "Category": "Economy", "Type": "Production", "Effect": "Food & RuneProduction", "Multiplier": 0.2492 },
        { "Category": "Economy", "Type": "Bookkeeping", "Effect": "Wage Reduction", "Multiplier": 0.068 },
        { "Category": "Economy", "Type": "Artisan", "Effect": "Construction Time Reduction,Construction&RazeCostReduction", "Multiplier": 0.0478 },
        { "Category": "Military", "Type": "Strategy", "Effect": "Defensive Military Efficiency", "Multiplier": 0.0367 },
        { "Category": "Military", "Type": "Siege", "Effect": "BattleGains", "Multiplier": 0.0262 },
        { "Category": "Military", "Type": "Resilience", "Effect": "Reduced Military Casualties", "Multiplier": 0.0367 },
        { "Category": "Military", "Type": "Tactics", "Effect": "Offensive Military Efficiency", "Multiplier": 0.0367 },
        { "Category": "Military", "Type": "Valor", "Effect": "Reduced Military Train Time & Increased Dragon Slaying Strength", "Multiplier": 0.0582 },
        { "Category": "Military", "Type": "Heroism", "Effect": "Draft Speed & Draft Costs Reduction", "Multiplier": 0.0418 },
        { "Category": "ArcaneArts", "Type": "Crime", "Effect": "Thievery Effectiveness", "Multiplier": 0.1557 },
        { "Category": "ArcaneArts", "Type": "Channeling", "Effect": "Magic Effectiveness", "Multiplier": 0.1875 },
        { "Category": "ArcaneArts", "Type": "Shielding", "Effect": "Reduced Damage from Enemy Thievery and Magic Instant Operations", "Multiplier": 0.0314 },
        { "Category": "ArcaneArts", "Type": "Cunning", "Effect": "Increased Thievery and Magic Instant Operation Damage", "Multiplier": 0.0472 },
        { "Category": "ArcaneArts", "Type": "Invocation", "Effect": "Ritual Rune Cost Reduction", "Multiplier": 0.0622 }
    ];
    scienceSpreadDefaults = {
        "BookCountStart": 4000,
        "SpreadMultiplier": 2,
        "Skip": 1,
        "Take": 2,
    };

    constructor() {

    }

    getDefaultScienceTypeCurrentBookSpread(currentBooks, scienceType) {
        // example: currentBooks = (spreadMultiplier^i) * bookCountStart
        // example: (currentBooks / bookCountStart) = (spreadMultiplier^i)
        // example: log((currentBooks / bookCountStart)) = i
        // formula for i: log((currentBooks / bookCountStart)) / log(spreadMultiplier) = i
        var ceilIndex = 0;

        if (currentBooks >= this.scienceSpreadDefaults.BookCountStart) {
            let formulaIndex = Math.log((currentBooks / this.scienceSpreadDefaults.BookCountStart)) / Math.log(this.scienceSpreadDefaults.SpreadMultiplier);
            ceilIndex = Math.ceil(formulaIndex);
        }

        var result = this.#getScienceTypeBookSpread(
            scienceType,
            this.scienceSpreadDefaults.BookCountStart,
            this.scienceSpreadDefaults.SpreadMultiplier,
            ceilIndex,
            this.scienceSpreadDefaults.Take);
        return result;
    }

    getDefaultScienceTypeBookSpread(scienceType) {
        var result = this.#getScienceTypeBookSpread(
            scienceType,
            this.scienceSpreadDefaults.BookCountStart,
            this.scienceSpreadDefaults.SpreadMultiplier,
            this.scienceSpreadDefaults.Skip,
            this.scienceSpreadDefaults.Take);
        return result;
    }

    #getScienceTypeBookSpread(scienceType, bookCountStart, spreadMultiplier, skip, take) {
        var result = [];
        for (let i = skip; i < (skip + take); i++) {
            var iterationMultiplier = spreadMultiplier ** i;
            var iterationBookCount = iterationMultiplier * bookCountStart;
            var iterationScienceEffectPercentage = this.#getScienceTypeEffectPercentageForBooks(i - skip + 1, iterationBookCount, scienceType);
            result.push(iterationScienceEffectPercentage);
        }
        return result;
    }

    #getScienceTypeEffectPercentageForBooks(index, bookCount, scienceType) {
        var science = this.sciences.find(scienceItem => scienceItem.Type == scienceType);
        var scienceStrenght = this.#getScienceStrenghtForBooks(bookCount);
        var scienceEffectPercentage = scienceStrenght * science.Multiplier;
        return { "Index": index, "Science": science, "BookCount": bookCount, "EffectPercentage": scienceEffectPercentage };
    }

    #getScienceStrenghtForBooks(bookCount) {
        return bookCount ** (1 / 2.125);
    }
}