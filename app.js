new Vue({
	el: '.container',
	data: {
		filter: "*",
		menu: ["Desarrollo", "Administración", "Seguridad"],
		sections: [
			{
				name: "Relevamiento",
				kpis: [
					{ name: "Documentos", limit: 4, unit: "u", value: 7 },
					{ name: "Desvíos", limit: 5, unit: "%", value: 14 }
				]
			},
			{
				name: "Desarrollo",
				kpis: [
					{ name: "Desvíos", limit: 20, unit: "u", value: 14 }
				]
			},
			{
				name: "Implementación",
				kpis: [
					{ name: "Implementaciones", limit: 20, unit: "u", value: 7 },
					{ name: "Tasa de Reimpl.", limit: 10, unit: "%", value: 11 },
					{ name: "Lorem", limit: 20, unit: "%", value: 14 },
					{ name: "Ipsum", limit: 5, unit: "%", value: 4 },
					{ name: "Lorem", limit: 7, unit: "%", value: 6 }
				]
			}
		]
	},
	methods: {
		setFilter: function (category) {
			this.filter = (category === "*") ? true : category.name;
		},
		addKpi: function (){
			this.sections.push({
				kpis: [
					{ name: "Desvíos", limit: 20, unit: "u", value: 14 }
				]
				});
		}	
	},
	computed: {
		kpis: function() {
			var k;
			return this.sections.reduce(function(k, section) {
				k = k.concat(section.kpis.map(function (kpi) {
					kpi['category'] = section.name;
					return kpi;
				}));
				return k;
			}, []);
		},
	}
});
