const form=document.getElementById('form');
const arr=
["expression tree",
"covid spread",
"sq root of a number",
"merge k sorted arrays",
"lowest common ancestor in a bst",
"kadane's algorithm",
"union of two linked lists",
"delete middle of linked list",
"unit area of largest region of 1's ",
"level order traversal",
"intersection point in Y shapped linked lists",
"print bst elements in given range",
"merge two sorted linked lists",
"parenthesis checker",
"next greater element",
"finding middle element in a linked list ",
"serialize and deserialize binary tree",
"reverese level order traversal",
"queue using two stacks",
"0-1 knapsack",
"find median in a stream",
"burning tree",
"connect nodes at same level",
"node at distance",
"bottom view of binary tree",
"nodes at given distance in binary tree",
"maximum of all subarrays of size k",
"level order traversal in spiral form",
"matrix chain multiplication",
"bfs of graph",
"search an element in sorted and rotated array",
"count pairs with given sum",
"reverse each word in a given string",
"maximum path sum in matrix",
"top sort",
"lowest common ancestor in a binary tree",
"stock buy and sell",
"celebrity problem",
"left view of binary tree",
"count inversions",
"key pair",
"detect cycle in directed graph",
"detect cycle in undirected graph",
"solve sudokeu",
"flattening linked list",
"smallest range in k lists",
"vertical traversal in binary tree",
"N meetings in one room ",
"word ladder 1",
"print the Kth digit ",
"shortest direction",
"mobile numeric keypad",
"multiply two strings",
"add two numbers represented by linked lists",
"consecutive one's not allowed",
"get min from stack",
"snake and ladder",
"lru cache",
"check the bst",
"intersection of two linked lists",
"find duplicates in an array ",
"next smallest palindrome",
"k th element of two sorted arrays",
"tic tac toe",
"first non repeating chararcter in a stream",
"choclate distribution problem",
"cutting binary string",
"gold mine problem",
"clone a stack without using extra space",
"sum of dependencies in a graph",
"palindrome pairs",
"word ladder 2",
"ipl 2021 match day 2",
"maximum sum of elemets not part of lis"];







const  todolist=document.getElementById('todolist');

const todos=JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach((todo)=>{
        addtodo(todo)
    })
}
if(todos.length<arr.length) {
    arr.forEach((a)=>{
        
     addtodo({
        text:a,
        completed:0
    }) 
    })
    
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addtodo();
})

function addtodo(todo){
   
   
    if(todo){
        todotext=todo.text;
    }
  
   if(todotext){
     const  todoel=document.createElement('li');
     if(todo&&todo.completed){
         todoel.classList.add('completed');
     }
       todoel.innerText =todotext;
    //   todoel.innerHTML=`${todotext}  <i  id="icon" class="fab fa-twitter mr-4"></i> `
    //   const  icon=document.getElementById('icon');
      
       todoel.addEventListener('click',()=>{
           todoel.classList.toggle("completed");
           updatels();
       });  
    

       todolist.appendChild(todoel);
       if(!todos)
       updatels();
   }
}
function updatels(){
    let todoel=document.querySelectorAll('li');
    const todos=[];
    todoel.forEach((todo)=>{
        todos.push({
        text:todo.innerText,
        completed:todo.classList.contains('completed')});
    });


    localStorage.setItem('todos',JSON.stringify(todos));
}


// function addtodo2(todo){
//     let arr=document.querySelectorAll('li');

//     arr.forEach((a)=>{
        
//         if(a.innertext==todo.text){
//             console.log(a);
//             if(todo.completed)
//             a.classList.add("completed");
//         }
//     })
// }