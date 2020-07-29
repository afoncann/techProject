var app = new Vue({
	
	el:'#app',
	data: {
		items:['add flour','add milk','add sugar','add vanilla']
	},
	
methods:{
	addItem():{
		this.items.push(this.newItem);
		this.newItem ='';
	}
		
}
	
});


