export let isLogedIn = () => localStorage?.getItem('userToken') ? true : false;