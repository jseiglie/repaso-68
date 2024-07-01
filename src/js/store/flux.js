const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			auth: false,
			jorge: 'wiki',
			nombres: ['pepe', 'maria', 'lola', 'barbara'],
			selected: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			loadData: async () => {
				try {
					const resp = await fetch("https://rickandmortyapi.com/api/character");
					if (!resp.ok) throw new Error('error fetching data')
					const data = await resp.json();
					setStore({ characters: data.results })
					console.log(data)
				} catch (error) {
					console.log('error---> ', error);
				}
			},
			// Use getActions to call a function within a fuction
			// DRY ---> Dont Repeat Yourself
			nextName: () => {
				if (!getStore().selected) return false;
				let index = getStore().nombres.indexOf(getStore().selected)
				if (index == getStore().nombres.length - 1) {
					index = 0
				} else {
					index++
				}
				getActions().selectName(getStore().nombres[index])
			},
			selectName: (name) => {
				setStore({ selected: name })
			},
			login: () => {
				setStore({ auth: true })
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
