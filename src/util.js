    function setLocal(key,val){
        localStorage.setItem(key,JSON.stringify(val));
    }
    function getLocal(key){
        var val = localStorage.getItem(key);
        if(val) {
            return JSON.parse(val);
        }
    }
    export {
        setLocal,
        getLocal
    }