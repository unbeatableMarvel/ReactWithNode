import axios from 'axios';

export function fetchMenuList(searchText){
	return(
        axios({
			method: 'get',
			url: "http://localhost:3000/"

		})
	)
};
export function addMenuList(newMenulist){
	return(
        axios({
			method: 'post',
			url: "http://localhost:3000/add/",
			data:newMenulist

		})
	)
};
export function updateMenuList(updateDetails){
	
	return(
        axios({
			method: 'post',
			url: "http://localhost:3000/update/",
			data:updateDetails

		})
	)
};

export function deleteMenuList(Id){
	return(
        axios({
			method: 'post',
			url: "http://localhost:3000/delete/",
			data:{id:Id}

		})
	)
};