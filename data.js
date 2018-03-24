var data1 = {
	menu: ["Desarrollo", "Administración", "Seguridad"],
	sections: [
		{
			name: "Relevamiento",
			kpis: [
				{ name: "Documentos", limit: 4, unit: "u", value: 7},
				{ name: "Desvíos", limit: 5, unit: "%", value: 14}
			]
		},
		{
			name: "Desarrollo",
			kpis: [
				{ name: "Desvíos", limit: 20, unit: "u", value: 14}
			]
		},
		{
			name: "Implementación",
			kpis: [
				{ name: "Implementaciones", limit: 20, unit: "u", value: 7},
				{ name: "Tasa de Reimpl.", limit: 10, unit: "%", value: 11},
				{ name: "Lorem", limit: 20, unit: "%", value: 14},
				{ name: "Ipsum", limit: 5, unit: "%", value: 4},
				{ name: "Lorem", limit: 7, unit: "%", value: 6},
			]
		},

	]
}

var data2 = {
	menu: ["Producción", "Calidad"],
	sections: [
		{
			name: "Logística",
			kpis: [
				{ name: "Accidentes", limit: 0, unit: "p", value: 1},
				{ name: "Cal.Sec.RB", limit: 95, unit: "%", value: 88},
				{ name: "Cal.Sec.LK", limit: 85, unit: "%", value: 89},
				{ name: "Cal.Sec.MO", limit: 75, unit: "%", value: 78},
				{ name: "Ab. Tardío", limit: 18, unit: "u", value: 14}
			]
		},
		{
			name: "Montaje",
			kpis: [
				{ name: "Accidentes", limit: 0, unit: "p", value: 0},
				{ name: "GAL", limit: 85, unit: "%", value: 90},
				{ name: "CPA", limit: 24, unit: "pt", value: 22},
				{ name: "Entrega", limit: 80, unit: "u", value: 78},
				{ name: "Circulante", limit: 11, unit: "u", value: 14}
			]
		}
	]
}