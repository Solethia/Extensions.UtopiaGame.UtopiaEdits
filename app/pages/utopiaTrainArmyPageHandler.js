class UtopiaTrainArmyPageHandler {

	#utopiaResourceBar;
	#configurationProvider;
	constructor(configurationProvider) {
		this.#configurationProvider = configurationProvider;
		this.#utopiaResourceBar = new UtopiaResourceBar();
	}

	handleLoaded() {
		if (this.#canAddFutureColumn()) {
			var totalPopulationCell = this.#getTrainArmyTwoColumnStatCell('Total population');
			var totalPopulation = this.#utopiaResourceBar.getStatCellNumber(totalPopulationCell);

			var landCell = this.#utopiaResourceBar.getResouceBarCell("Land");
			var land = this.#utopiaResourceBar.getStatCellNumber(landCell);

			this.#addFutureColumn(totalPopulation, land);
        }
	}

	#canAddFutureColumn() {
		return this.#configurationProvider.getConfigurationCopy()['check-add-train-army-future-column'];
	}

	#getTrainArmyTwoColumnStatCell(statHeader) {
		var result = null;
		var table = $('.game-content table.two-column-stats');
		var rows = table.find('tbody tr');
		rows.each(function () {
			var row = $(this);
			var rowHeaderCells = row.find('th');
			var rowCells = row.find('td');
			rowHeaderCells.each(function (index) {
				var headerCell = $(this);
				if (headerCell.text().includes(statHeader)) {
					var rowCell = rowCells.eq(index);
					result = rowCell;
					return false;
				}
				else {
					//console.log(headerCell.text());
				}
			});
			if (result)
				return false;
		});

		if (result)
			return result;
		else
			throw new Error('Stat ' + statHeader + ' not found.');
	}



	#addFutureColumn(totalPopulation, land) {
		var newCellIndex = 5;
		var newCellHeader = 'Future';
		var trainTroopsTableJQ = this.#getTrainTroopsTableJQ();
		//console.log(trainTroopsTableJQ);
		var headerRow = trainTroopsTableJQ.find('thead tr').eq(0);
		var headerCells = headerRow.find('th');
		//console.log(headerCells);
		var headerCellLocation = headerCells.eq(newCellIndex);
		//console.log(headerCellLocation);
		// Check if it is already added
		if (!headerCellLocation.text().includes(newCellHeader)) {
			// Add new header for new column
			headerCellLocation.before('<th>' + newCellHeader + '</th>');
			// For each row add the cell for the column
			var rows = trainTroopsTableJQ.find('tbody tr');

			var rowEditor = new TrainTroopsRowEditor(totalPopulation, land, newCellIndex);
			rows.each(function (index, element) {
				rowEditor.addCombinedColumnToTrainTroopsRow(index, element);
			});
		}
	}



	#getTrainTroopsTableJQ() {
		return $(".game-content table:has(thead)");
	}


}

class TrainTroopsRowEditor {

	#totalPopulation;
	#land;
	#newCellIndex;

	constructor(totalPopulation, land, newCellIndex) {

		this.#totalPopulation = totalPopulation;
		this.#land = land;
		this.#newCellIndex = newCellIndex;
	}

	addCombinedColumnToTrainTroopsRow(index, element) {
		var row = $(element);

		var rowCells = row.find('td');
		// Since first row is a th it is not included in our rowCells
		var ownedCell = rowCells.eq(0);
		var ownedTroops = parseInt(ownedCell.text().replace(',', ''), 10);
		var trainingCell = rowCells.eq(1);
		var trainingTroops = parseInt(trainingCell.text().replace(',', ''), 10);
		var futureTroops = ownedTroops + trainingTroops;
		var indexCell = rowCells.eq(this.#newCellIndex - 1); // minus 1 because first cell is th
		var percentageTotalPopulation = NumberHelper.round((futureTroops / this.#totalPopulation) * 100, 1);
		var xpa = NumberHelper.round(futureTroops / this.#land, 1);
		var troopType = this.#getTroopType(index);
		var newCellContent = '<td>' + futureTroops;
		var newCellContent = newCellContent +
			'<span class="future-of-population"> (' + percentageTotalPopulation + '%)</span>';
		var newCellContent = newCellContent +
			'<br><span class="future-xpa xpa">' + xpa + troopType + 'pa</span>';
		var newCellContent = newCellContent + '</td>';
		indexCell.before(newCellContent);
	}

	#getTroopType(type) {
		switch (type) {
			case 0:
				return 'os';
			case 1:
				return 'ds';
			case 2:
				return 'e';
			case 3:
				return 't';
			default:
				throw new Error('Not supported for' + type + '.');
		}
	}

	
}