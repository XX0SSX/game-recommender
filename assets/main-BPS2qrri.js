import{a as e,r as t,t as n}from"./main-O0hApang.js";var r=document.getElementById(`game-list`),i=document.getElementById(`filter-container`);function a(e){r.innerHTML=``,e.forEach(e=>{r.innerHTML+=`
                    <div class="card">
                        <img src="${e.img}" alt="${e.name}">
                        <h3>${e.name}</h3>
                        <p>หมวด: ${e.category}</p>
                        <p>ราคา: ${e.price} บาท</p>
                        <button class="add-cart-btn" data-id="${e.id}">เพิ่มลงตะกร้า</button>
                    </div>
                `}),document.querySelectorAll(`.add-cart-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let r=parseInt(e.target.getAttribute(`data-id`)),i=t.find(e=>e.id===r);i&&n(i)})})}e().forEach(e=>{let n=document.createElement(`button`);n.innerText=e,n.onclick=()=>{a(t.filter(t=>t.category===e))},i.appendChild(n)});var o=document.createElement(`button`);o.innerText=`ทั้งหมด`,o.onclick=()=>a(t),i.appendChild(o),a(t);