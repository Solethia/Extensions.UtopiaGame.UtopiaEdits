class UtopiaResourceBar {

    constructor() {

    }

    getResouceBarCell(resourceHeader) {
        var result = null;
        var table = $('#resource-bar');

        var headers = table.find('thead tr th');
        //console.log(headers);
        var cells = table.find('tbody tr th');
        //console.log(cells);

        headers.each(function (index) {
            var headerCell = $(this);
            if (headerCell.text().includes(resourceHeader)) {
                var cell = cells.eq(index);
                //console.log(headerCell);
                //console.log(headerCell.text());
                //console.log(cell);
                //console.log(cell.text());
                result = cell;
                return false;
            }
        });

        if (result)
            return result;
        else
            throw new Error('Stat ' + resourceHeader + ' not found.');
    }

    getStatCellNumber(statCell) {
        let result = null;
        let str = statCell.text().replace(',', '');
        const myArr = str.split(" ");
        myArr.forEach(function callbackFn(element) {
            if (!result && !isNaN(element)) {
                result = Number(str);
            }
        });

        if (result)
            return result;
        else
            throw new Error('Could not parse ' + str + ' to Number.')
    }
}