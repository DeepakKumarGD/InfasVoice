var page = {
	"name": {
		"INCOME_STATISTICS": "incomeStatistics"
	}
};

var incomeStatisticsProp = [
	{"name": "year", "label": "Year"},
	{"name": "revenue", "label": "Revenue"},
	{"name": "gross_profit", "label": "Gross Profit"},
	{"name": "ebitda", "label": "EBITDA"},
	{"name": "operating_income", "label": "Operating Income"},
	{"name": "net_income", "label": "Net Income"},
	{"name": "diluted_EPS", "label": "Diluted EPS"},
	{"name": "gross_margin", "label": "Gross Margin"},
	{"name": "tda_margin", "label": "TDA Margin"},
	{"name": "operating_margin", "label": "Operating Margin"},
	{"name": "net_margin", "label": "Net Margin"},
	{"name": "yy_revenue_growth", "label": "Y/Y Revenue Growth"},
	{"name": "yy_EPS_growth", "label": "Y/Y EPS growth"}
];

var funadamentalsParam = {
	"REVENUE": {
		"text": "Revenue",
		"color": "#b1d8f8",
		"cssClass":"chart-color-icon chart-color-icon-1"
	},
	"GROSS_PROFIT": {
		"text": "Gross Profit",
		"color": "#94c6df",
		"cssClass":"chart-color-icon chart-color-icon-2"
	},
	"EBITDA": {
		"text": "EBITDA",
		"color": "#4798c1",
		"cssClass":"chart-color-icon chart-color-icon-3"
	},
	"CD_TDA": {
		"text": "CD TDA",
		"color": "#4798c1",
		"cssClass":"chart-color-icon chart-color-icon-3"
	},
	"OPERATING_INCOME": {
		"text": "Operating Income",
		"color": "#0e36a2",
		"cssClass":"chart-color-icon chart-color-icon-4"
	},
	"NET_INCOME": {
		"text": "Net Income",
		"color": "#020e30",
		"cssClass":"chart-color-icon chart-color-icon-5"
	},
	"DILUTED_EPS": {
		"text": "Diluted EPS",
		"color": "#000000",
		"cssClass":"chart-color-icon chart-color-icon--circle"
	}
};

var graph = {
	"TYPE": {
		"COLUMN": "column",
		"SPLINE": "spline",
		"LINE": "line"
	}
};

var postFix = {
	"B": "B",
	"PERCENTAGE": "%"
};

var balanceSheet = {
	"ASSETS": {
		"text": "Assets",
		"color": "#4798c1",
		"cssClass":"chart-color-icon chart-color-icon-3"
	},
	"LIABILITIES": {
		"text": "Liabilities",
		"color": "#0e36a2",
		"cssClass":"chart-color-icon chart-color-icon-4"
	},
	"EQUITY": {
		"text": "Equity",
		"color": "#020e30",
		"cssClass":"chart-color-icon chart-color-icon-5"
	},
	"BOOK_VAL_SHARE": {
		"text": "Book Val/Share",
		"color": "#000000",
		"cssClass":"chart-color-icon chart-color-icon--circle"
	},
	"Y_BOOK_VAL_SHARE_GROWTH":{
		"text":"Y/Y Book Val/Share Growth"
	}
};


var items = [
			{id: 1, name: 'Food'},
			{id: 2, name: 'Transport'},
			{id: 3, name: 'Pantry'},
			{id: 4, name: 'Restroom'},
			{id: 5, name: 'Lost/Found'},
			{id: 6, name: 'Electricity'},
			{id: 7, name: 'Default1'},
			{id: 8, name: 'Default2'},
			{id: 9, name: 'Default3'}];

