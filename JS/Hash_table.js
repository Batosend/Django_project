function HashTable(size = 13){
    const _store = [];
    const _size = size;

    function hash(string){
        let index = 0;
        for (let i=0; i<string.length; i++){
            index += string.charCodeAt(i) * (i+1);
        }
        return index % _size;
    }
    function findMatchingIndex(list, key){
        for(let i = 0; i< list.length; i++){
            if(list[i][0] ===key) return i;
        }
    }
    return {
        setElement(key, value) {
            const index = hash(key);
            if(!_store[index]) {
                _store[index] = [
                    [key, value]
                ];
            }
            else{
                const list = _store[index];
                const mathingIndex = findMatchingIndex(list, key);

                if(mathingIndex){
                    list[mathingIndex] = [key, value];
                    return;
                }
                list.push([key,value])
            }
        },
        getElement(key) {
            const index = hash(key);
            if(_store[index]) {
                const list = _store[index];
                const mathingIndex = findMatchingIndex(list, key);
                if(mathingIndex) return list[mathingIndex][1];
            }
        },
        dump(){
            return _store;
        }
    }
}

const ht = new HashTable
ht.setElement("boroda", "Boroda");
ht.getElement("boroda", "Boroda");
ht.dump()