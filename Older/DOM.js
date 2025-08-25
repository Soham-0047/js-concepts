let styles= [ 
    'font-size: 2rem', 
    'font-family:roman', 
    'background: white', 
    'display: inline-block', 
    'color: black', 
    'padding: 8px 19px', 
    'border: 1px dashed;' 
].join(';') 

console.log("%c Hi Soham 🧑",styles)


document.body.style.backgroundColor = "red"
        document.body.color = "yellow"
       let btn =  document.getElementById('btn')

        document.getElementById('btn').style.backgroundColor ='yellow'
        btn.style.color = 'white'

        var count =1
        myfn = ()=>{
          
            if(count%2===0){
            btn.style.backgroundColor="black"}
            else{
                btn.style.backgroundColor="pink" 
            //    window.alert(`Click ${count}`) 
            }
            count++
            // console.log(count)
        }

        function myfn(){
          
          ///Some code
      }
        // console.log(btn)
        // console.log(btn.style)
        // console.log(btn.nodeName)
        // console.log(document)
        // console.log(document.body)

        //here we can also use console.dir()

const elements = document.getElementsByTagName('h1')

elements[1].style.color="gray"
console.log(elements)

const ele1 = document.getElementsByTagName('li')

// console.log(ele1)

//For accesing each item index inside array

const bunchelements = [...ele1]

// console.log(bunchelements)

// bunchelements.forEach(function(element){
//     console.log("method ny forEach")
//     console.log(element)
// })

//Or
// ele1[2].style.backgroundColor="blue"

// bunchelements.map((r)=>{
//     r.style.color="white"
//     console.log(r)
// })


//Now getElementsByClassName

// const items = document.getElementsByClassName("box")

// console.log(items)
// items[2].style.color="green"

/*******/

//querySelector('any css') = select single

//querySelectorAll('any css') = selects all

const itemq = document.querySelector('#res')

itemq.style.backgroundColor="violet"

const item1 = document.querySelector(".box3")

//target single element

// item1.style.backgroundColor = "yellow"
// console.log(item1)

// const item2 = document.querySelector('li:last-child')
// console.log(`using last-child method ${item2}`)

// const itemq1 = document.querySelectorAll('.box')

// console.log(itemq1)

// itemq1.forEach((para)=>{
//     para.style.fontSize ='1.5rem'
//     console.log(para)
// })


//childNodes - returns all childNodes including whitespace which is treated as a text node

//children
//firstChild
//lastChild

// const result = document.querySelector('#res1')

// console.log(result.childNodes)
// console.log(result.children)
// console.log(result.firstChild)
// console.log(result.lastChild)

// console.log(result.parentElement.parentElement)

// const nheading = document.querySelector('h2')

//Return parent element of particular item
// nheading.parentElement.parentElement.parentElement.style.backgroundColor="blue"
// console.log(nheading.parentElement.parentElement)



//previousSibling
//nextSibling
//return whitespace


// const first1 = document.querySelector('.first')

// const second1 = (first1.nextSibling.nextSibling.style.color='pink')
// console.log(second1)
  
// const last = document.querySelector('#last')

// const second2 = (last.previousSibling.previousSibling.style.color='pink')



// const test1 = last.previousSibling.previousSibling 
// console.log(test1)    

// const item3 = document.querySelector('.third')
// console.log(item3)
// console.log(item3.nodeName)

// const item4 = document.querySelector('.first')

// const classvalue = item4.getAttribute('class')

// console.log(classvalue)

// console.log(item4)

//Set the class/id for any attribute

// const link = document.querySelector('a')
// // console.log(link)
// link.setAttribute('class','link-atr')

// console.log(link.className) //link-atr

//Also we can change the text content inside any attribute
// const child = document.querySelector('li')
// link.textContent = "This text change by textContent method"

//Dynamically added text content inside attribute

// const child1 = child.nextElementSibling.parentElement
// console.log(child1)



//Parent element of link attribute

// const child3 = link.parentElement
// console.log(child3)


//Dyanmically added CSS classes

// const first3 = document.getElementById('first2')
// const second3 = document.getElementById('second2')
// const third3 = document.getElementById('third2')

// first3.setAttribute('class','colorcl')

// const classvalue2 = first3.className
// console.log(classvalue2)

// second3.className ='colorcl'

//Here is a gotcha
//If I want to assign new class in id then we can do it 2 ways
//second3.className ='colorcl colorcl1'

//OR

// third3.classList.add('colorcl1')
// third3.classList.add('colorcl')
// console.log(third3.classList)

//Remove the CSS
// third3.classList.remove('colorcl1')

// const res1 = third3.classList.contains('colorcl')

// if(res1){
//     console.log("contain colorcl")
// }
// else{
//     console.log("Not contain the above class")
// }



//createElement('div')
//createTextNode('text content')
//element.appendChild(childElement)



// const result3 = document.querySelector('.fifth')

// const newdiv = document.createElement('h1')

// const text = document.createTextNode("This is created")

// newdiv.appendChild(text)
// result3.appendChild(newdiv)
// console.log(result3.children)


//prepend
//innerText

// const head = document.createElement('h2')

// head.innerText = "h2 heading"
//  document.body.prepend(head)

const head2 = document.querySelector('.fifth')

head2.remove() //remove inside .fifth class

const box1 = document.querySelector('.sixth')

console.log(box1.style)

//can add more css property with it

box1.classList.add('sth')



//Events

const btn1 = document.querySelector('.btn')

console.log(btn1.nodeName)

btn1.addEventListener('click',()=>{
    box1.style.color="white"
    box1.setAttribute
})




