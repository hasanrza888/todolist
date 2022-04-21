sort1 = document.querySelector('.sort1');
delete1 = document.querySelector('.delete');
input = document.querySelector('.input');
dobavitbtn = document.querySelector('.dobavitbtn');
listcont = document.createElement('ul');
listcont.classList.add('listcontain');
inputcontainer = document.querySelector('.inputcontainer');
plusbtn = document.querySelector('.plusbtn');
iconreng = document.querySelector('.iconreng');

buttons = document.querySelector('.buttons');
body = document.querySelector('body');
konteynerlistlerin = document.querySelector('.konteynerlistlerin');
warningresult = document.querySelector('.warningresult');

searchinput = document.querySelector('.searchinput');
searchiconn = document.querySelector('.searchiconn');

// sort1.addEventListener('mouseover', ()=>{
//     sort1.src = "images/Group 73.png"
// })

// sort1.addEventListener('mouseout', ()=>{
//     sort1.src = "images/Group 38.png"
// })

delete1.addEventListener('mouseover', ()=>{
    delete1.src = "images/Group 70.png"
})

delete1.addEventListener('mouseout', ()=>{
    delete1.src = "images/Group 56.png"
})

// iconreng.addEventListener('mouseover', ()=>{
//     iconreng.style.color = 'red';
// })

// iconreng.addEventListener('mouseout', ()=>{
//     iconreng.style.color = 'black';
// })


delete1.addEventListener('click', ()=>{
    input.value = '';
})


dobavitbtn.addEventListener('click', ()=>{
    if(input.value.length > 0 && input.value.length <= 20){

        listcont.style.display = 'block';
        li = document.createElement('li');
        listcont.append(li);
        konteynerlistlerin.append(listcont);

        li.classList.add('listici');
        li.id = 'listid'
        li.draggable = 'true';
        
        p = document.createElement('p');

        p.innerHTML = input.value;

        li.append(p);

        div = document.createElement('div');
        div.classList.add('editdeletecont')

        edit = document.createElement('img');
        edit.src = 'images/pencil.png';
        edit.classList.add('edit');
        div.append(edit);

        imgg = document.createElement('img');
        imgg.src = 'images/Group 56.png';
        imgg.classList.add('delete2');
        div.append(imgg);

        li.append(div);

        


        input.value = '';

        inputcontainer.style.display = 'none';

        delete2 = document.querySelectorAll('.delete2')
        for(let i=0; i<delete2.length; i++){

            delete2[i].addEventListener('mouseover', ()=>{
                delete2[i].src = "images/Group 70.png"
            })
            
            delete2[i].addEventListener('mouseout', ()=>{
                delete2[i].src = "images/Group 56.png"
            })
        }

        editsss = document.querySelectorAll('.edit');
        paredits = document.querySelectorAll('p');
        listiciss = document.querySelectorAll('.listici');

        for(let i=0; i<editsss.length; i++){

            editsss[i].addEventListener('mouseover', ()=>{
                editsss[i].src = "images/pencil (2).png"
            })
            
            editsss[i].addEventListener('mouseout', ()=>{
                editsss[i].src = "images/pencil.png"
            })

            editsss[i].addEventListener('click', ()=>{
                inputcontainer.style.display = 'block';
                
                input.value = `${paredits[i].innerText}`;
                listiciss[i].style.display = 'none';

                // dobavitbtn.addEventListener('click', ()=>{
                //     paredits[i].innerText = input.value;
                // })

                

            })

            
        }

        sill = document.querySelectorAll('.delete2');
        liiists = document.querySelectorAll('li');
        for(let i=0; i<sill.length; i++){

            sill[i].addEventListener('click', ()=>{
                liiists[i].remove();

                if(listcont.children.length==0){
                    listcont.style.display = 'none'
                    inputcontainer.style.display = 'block';

                    console.log('sifirdir');
                }

            })

        }


        plusbtn.addEventListener('click', ()=>{
            inputcontainer.style.display = 'block';

        })






    }else if(input.value.length == 0){
        warningresult.style.display = 'block';
        warningresult.innerHTML = 'You didn\'t include anything';
    }

    
})






sort1.addEventListener('click', ()=>{

    ppp = document.querySelectorAll('p');
    
    let datap = [];
    for(let i=0; i<ppp.length; i++){
        datap.push(ppp[i].innerText);
            
    }
    let old = [...datap]
    datap.sort();

    let linkorigin=window.location.origin

    if(sort1.src == `${linkorigin}/images/Group%2038.png`){

        sort1.src = `${linkorigin}/images/Group%2090.png`;
        

        sort1.innerText = '<';



        for(let i=0; i<datap.length; i++){
            ppp[i].innerHTML = datap[i];
            
        }

    }else if(sort1.src == `${linkorigin}/images/Group%2090.png`){

        sort1.src = `${linkorigin}/images/Group%2038.png`;
                
        sort1.innerText = '>'        

        for(let i=0; i<old.length; i++){

            ppp[i].innerHTML = old.sort().reverse()[i];

        }


    }




})




input.addEventListener('keyup', (e)=>{

    if(e.target.value.length == 0){

        warningresult.style.display = 'block';
        warningresult.innerHTML = 'Please include something';

    }else if(e.target.value.length > 20){

        warningresult.style.display = 'block';
        warningresult.innerHTML = 'More than 20 character';
    
    }else{

        warningresult.style.display = 'none';

    }

})



    searchiconn.addEventListener('click', ()=>{

        searchinput.style.display = 'block';

        searchinput.addEventListener('keyup', (e)=>{

            searchppp = document.querySelectorAll('p');
            searchlistleri = document.querySelectorAll('li')
            for(let i=0; i<searchppp.length; i++){

                for(let j=0; j<searchppp[i].innerText.length; j++){

                    if(searchppp[i].textContent.toLowerCase().includes(searchinput.value.toLowerCase())){

                        searchlistleri[i].style.display = "";    

                    }else{
                        
                        searchlistleri[i].style.display = "none";
                        
                    }

                }

            }

        })


    })

    searchiconn.addEventListener('dblclick', ()=>{
        searchinput.style.display = 'none';
    })



new Sortable(listcont, {
    animation: 350
});





