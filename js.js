let _search = document.getElementsByTagName('input')[0]
        let _list = document.getElementById('list')
      
        let arr = []
        const fetchUsers = () => {
            axios.get( `https://fakestoreapi.com/products`)
                .then(response => {
                    arr = response.data;
                    arr.map((val)=>{
                        let _li = document.createElement('li')
                        let parts = (val.title).split(" ")
                        let txt = ''
                        for(let i=0;i<4;i++){
                            txt += parts[i]
                        }
                        _li.innerHTML = `${txt}`
                        _list.appendChild(_li)
                    })

                })
                .catch(error => console.error(error));
        };
        
        fetchUsers();
                function func1(e){
            let temp = e.target.value
            let _lis = document.querySelectorAll('#list li')
            _lis.forEach((item)=>{
                item.style.display = 'none'
                item.addEventListener('click',(e)=>{
                    _search.value = e.target.innerHTML
                    _lis.forEach((itemm)=>{
                        itemm.style.display = 'none'
                      
                    })

                })
            })
            if(temp.length!=0){
                _lis.forEach((val)=>{
                    if(((val.innerHTML.toLowerCase()).slice(0,temp.length))==temp){
                        val.style.display = 'block'
                    }
                })
            }
        }