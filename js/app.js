// console.log("hello world");

const list_container = document.querySelector('.list_items');
const add_btn = document.querySelector('.add_btn');
const input_field = document.querySelector("#input_content");

let count = 0;
add_btn.addEventListener("click",function()
{
    let input_value = input_field.value ;
    // li element create 
    let li_element = document.createElement('li');
    li_element.classList.add('list_element');
    // del element create
    let para = document.createElement('del');
    para.classList.add('para');
    para.textContent = input_value;
    // delete button create
    let btn = document.createElement('button');
    btn.classList.add('delete_element');
    btn.innerHTML = '<i class="fas fa-trash-alt"></i>' ;
    btn.value = count ;
    // done task btn create
    let done_btn = document.createElement('button');
    done_btn.classList.add('done_btn');
    done_btn.innerHTML = '<i class="fas fa-check-double"></i>';
    done_btn.value = count;
    // console.log(done_btn);
    count++;
    // console.log(btn);
    li_element.appendChild(para);
    li_element.appendChild(done_btn);
    li_element.appendChild(btn);
    // console.log(li_element);
    list_container.appendChild(li_element);
 
    let delete_li = document.querySelectorAll('.delete_element');
    let list_element = document.querySelectorAll('.list_element');
    // console.log(list_element);
    // console.log(list_container);
     
    done_btn.addEventListener("click",function()
    {
        para.classList.add('done_element');

    });
    
    btn.addEventListener("click",function()
    {
        list_container.removeChild(li_element);
    });

});

